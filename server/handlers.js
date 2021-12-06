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