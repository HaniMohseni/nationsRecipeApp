
const path = require('path');
const express = require('express');

const {addUser, addRecipeToFavorite, signin, deleteRecipe} = require("./handlers")


const PORT = 8000;

express()

 .use(express.json())

 // ============Routs for Endpoints============//

 .post("/api/new-user", addUser)
 .post("/api/favorite", addRecipeToFavorite)
 .post("/api/sign-in", signin)
 .delete("/api/recipe/:id", deleteRecipe) 




  .listen(PORT, function() {
  console.info('🌍 Listening on port ' + PORT);
});
