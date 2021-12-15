"use strict";
const bcrypt = require("bcrypt");
// generate salt to hash password


const {MongoClient} = require("mongodb");
require ("dotenv").config({path:"./.env"});
const { MONGO_URI, DB_NAME } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

console.log(MONGO_URI);

const { v4: uuidv4 } = require("uuid");


// =================endpoints================//


//adding a new user

  const addUser = async (req, res) => {
    const { email, plain_password} = req.body;
    let _id = uuidv4();
  
   const query = {email}; 
   const salt = await bcrypt.genSalt(10);
   const hashed_password= await bcrypt.hash(plain_password, salt)
  
   const newRec = {
      _id,
      email: email,
      favorite_meals:[],
      hashed_password
    };
  
    try {
      const client = new MongoClient(MONGO_URI, options);
      await client.connect();
      const db = client.db("nationsRcipe");
      const registration = await db.collection("users").findOne(query);
      
      if (registration) {
        //if the user already exist
        return res.status(400).json({status: 400, msg: "This user already exists. Enter a new email address."});
      } else {
          const result = await db.collection("users").insertOne(newRec);
          
        res.status(200).json({ status: 200, msg: "Successfully Registered!", data: newRec });
        client.close();
      }
    } catch (err) {
        res.status(400).json({status: 400, message: err});
    }
  };
  
  

  //====================================================//
  //signin endpoin

  const signin = async (req, res) => {
    const { email, plain_password} = req.body;
    const query = {email}; 
   
  
//hashed_password: bcrypt.hash(plain_password, parseInt(salt))
//const match = await bcrypt.compare(password, user.passwordHash);

  
    try {
      const client = new MongoClient(MONGO_URI, options);
      await client.connect();
      const db = client.db("nationsRcipe");
      const user_found = await db.collection("users").findOne(query);
      
      if (!user_found) {
        //if the user already exist
        return res.status(400).json({status: 400, msg: "This user not found. Enter a valid email address."})
      } 
      const match = await bcrypt.compare(``+plain_password, user_found.hashed_password)
      
      if(!match) {
        return res.status(401).json({status: 400, msg: "The Password is not correct. Enter a valid password."});
      }   
      
      
      
      res.status(200).json({ status: 200, msg: "Successfully Logged In!", token: {email:email, favorite_meals:user_found.favorite_meals}});
      client.close();
      
    } catch (err) {
        res.status(400).json({status: 400, message: err});
    }

  }



//==========================================================//

//adding a food into user's favorite meals
const add2Favorite = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, food } = req.body;
  const query = {email}; 
  //console.log('Emai:', email, 'ID:', food_id)

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("nationsRcipe");
    const user_found = await db.collection("users").findOne(query);

    if (!user_found) {
      return res.status(400).json({status: 400, msg: "User not found"});
    } else {
         await db.collection("users").updateOne(query, {$push:{favorite_meals: food}});
      
        res.status(200).json({ status: 200, msg: "Successfully Saved!", token: {favorite_meals:user_found.favorite_meals} });
      client.close();
    }
  } catch (err) {
      res.status(400).json({status: 400, message: err});
  }
};


//=============================================//
//removing a food from user's favorite meals

const removefromFavorite = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { email, food } = req.body;
  const query = {email}; 

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("nationsRcipe");
    const user_found = await db.collection("users").findOne(query);
    
    if (!user_found) {
      return res.status(400).json({status: 400, msg: "User not found"});
    } else {
        await db.collection("users").updateOne(query, {$pull:{ favorite_meals: {$in:[food]}}});
      
      res.status(200).json({ status: 200, msg: "Successfully Removed!", token: {favorite_meals:user_found.favorite_meals} });
      client.close();
    }
  } catch (err) {
      res.status(400).json({status: 400, message: err});
  }
};


//=================================================//

module.exports = {
  addUser, add2Favorite, signin, removefromFavorite
};
