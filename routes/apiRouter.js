const express = require("express");
const apiRouter = express.Router();

const createError = require("http-errors");

const Recipe = require("../models/recipe");
const Menu = require("../models/menu");

//Send random recipe details
apiRouter.get('/recipe', (req, res) => {
  
})

//Returns specific recipe by Id
apiRouter.get('/recipe/:id', (req, res) => {
    
})

//Create Menu. Including 3 recipes on the menu
apiRouter.post('/menu', (req,res) => {
    
})

//Show all created menus for the current user
apiRouter.get('/menu', (req, res) => {
      
})

//Get the profile of the current user (via session info)
apiRouter.get('/user', (req, res) => {
  
})

//Edit the profile of the current user (via session info)
apiRouter.put('/user', (req, res) => {

})

//Update current user plan
apiRouter.patch('/user/premium', (req,res) =>{

})

//Save C.C. details
apiRouter.put('/user/cc', (req,res) =>{

})

//Save User personal details
apiRouter.patch('/user/det', (req,res) =>{

})

module.exports = apiRouter;
