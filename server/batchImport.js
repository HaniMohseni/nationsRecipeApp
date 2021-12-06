const fs = require('file-system');

const { MongoClient } = require("mongodb");

require("dotenv").config("../.env");
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const foods = JSON.parse(fs.readFileSync("data/foods.json"));

const batchImport = async () => {
    console.log(foods);
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("nationsRcipe"); 
    await db.collection("foods").insertMany(foods);
    client.close();
    }
    
    batchImport();
    
    module.exports = { batchImport}