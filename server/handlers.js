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
      console.log(user_found)
      if (!user_found) {
        //if the user already exist
        return res.status(400).json({status: 400, msg: "This user not found. Enter a valid email address."})
      } 
      const match = await bcrypt.compare(``+plain_password, user_found.hashed_password)
      
      if(!match) {
        return res.status(401).json({status: 400, msg: "The Password is not correct. Enter a valid password."});
      }   
      
      
      
      res.status(200).json({ status: 200, msg: "Successfully Logged In!", token: email.split('@')[0] });
      client.close();
      
    } catch (err) {
        res.status(400).json({status: 400, message: err});
    }

  }



//==========================================================//

//add a recipe in favorite to user data
const addRecipeToFavorite = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const { userId, food } = req.body;
  try {
    await client.connect();
    const db = client.db("nationsRcipe");

    //update user doc
    //this food  already exists in user.favorite arr
  
    const { value } = await db.collection("users").findOneAndUpdate(
      { _id: userId, "favorite._id": food._id },
     
    );

    if (value) {
      res.status(200).json({
        status: 200,
        data: { ...req.body },
        message: "Recipe added to user favorite",
      });
    } else {
      //this item doesn't exist in user.favorite arr yet
      //push the food 
      const { value } = await db
        .collection("users")
        .findOneAndUpdate(
          { _id: userId },
          { $push: { favorite: { ...food} } }
        );

      value
        ? res.status(200).json({
            status: 200,
            data: { ...req.body },
            message: "Recipe added to user favorite",
          })
        : res.status(404).json({ status: 500, data: "Server Error" });
    }
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};

//=================================================//

module.exports = {
  addUser, addRecipeToFavorite, signin
};
