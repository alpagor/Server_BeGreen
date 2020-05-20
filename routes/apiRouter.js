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

module.exports = apiRouter;
