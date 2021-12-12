"use strict";

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
  const { email, password } = req.body;
  let _id = uuidv4();

 const query = { email, password }; 
 

 const newRec = {
    _id,
    email: email,
    password: password,
    
  };

  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("nationsRcipe");
    const emeil = await db.collection("users").findOne(query);
    
    if (email) {
      //if the email already exist
      return res.status(400).json({status: 400, msg: "This email is already registered"});
    } else {
        const result = await db.collection("users").insertOne(newRec);
     
      res.status(200).json({ status: 200, msg: "Registration successful!", data: newRec });
      client.close();
    }
  } catch (err) {
      res.status(400).json({status: 400, message: err});
  }
};


module.exports = {
  addUser
};
