
const path = require('path');
const express = require('express');

const {addUser} = require("./handlers")


const PORT = 8000;

express()

 .use(express.json())

 // ============Routs for Endpoints============//

 .post("/api/new-user", addUser)


  .listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
