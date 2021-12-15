
const path = require('path');
const express = require('express');

const {addUser, add2Favorite, signin, removefromFavorite} = require("./handlers")


const PORT = 8000;

express()

 .use(express.json())

 // ============Routs for Endpoints============//

 .post("/api/new-user", addUser)
 .post("/api/add2Favorite", add2Favorite)
 .post("/api/sign-in", signin)
 .post("/api/removefromFavorite", removefromFavorite) 




  .listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
