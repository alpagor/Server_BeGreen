const express = require("express");
const apiRouter = express.Router();

const createError = require("http-errors");

const Recipe = require("../models/recipe");
const Menu = require("../models/menu");
const User = require("../models/user");

//Send recipe list by type
apiRouter.get("/recipe", (req, res) => {
  const recipeType = req.body.type;

  //if recipe type exists create queryObject is { type: recipeType }
  // else if no type is provided queryObject is {}

  const queryObject = {};

  if (recipeType) {
    queryObject.type = recipeType;
  }

  Recipe.find(queryObject)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Returns specific recipe by Id
apiRouter.get("/recipe/:recipeId", (req, res) => {
  const { recipeId } = req.params;

  Recipe.findById(recipeId)
    .then((recipeById) => {
      res.status(200).json(recipeById);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Create Menu
apiRouter.post("/menu", (req, res) => {
  const { name, recipes } = req.body;

  const currentUserID = req.session.currentUser;

  Menu.create({ name, recipes })

    .then((menu) => {
      //push inside menus array the created menu
      User.findByIdAndUpdate(currentUserID, { $push: { menus: menu } }).then(
        () => {
          res.status(201).json(menu);
        }
      );
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Show all created menus for the current user
apiRouter.get("/menu", (req, res) => {
  const currentUserID = req.session.currentUser;
  const userNow = User.findById(currentUserID);

  // populate the User menu array with the menus inside the Menu model and
  // then populate the recipes array inside Menu with the recipes in Recipe model
  userNow
    .populate({
      path: "menus",
      model: "Menu",
      populate: { path: "recipes", model: "Recipe" },
    })

    .then((allMenus) => {
      res.status(200).json(allMenus);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Show menu by ID
apiRouter.get("/menu/:id", (req, res) => {
  const { id } = req.params;

  Menu.findById(id)
    .populate("recipes")
    .then((menuById) => {
      res.status(200).json(menuById);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Get the profile of the current user (via session info)
apiRouter.get("/user", (req, res) => {
  const currentUser = req.session.currentUser._id;

  User.findById(currentUser)
    .then((userDetails) => {
      res.status(200).json(userDetails);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Edit the profile of the current user (via session info)
apiRouter.put("/user", (req, res) => {
  const {
    picture,
    weight,
    height,
    lifestyle,
    alergies,
    gender,
    age,
  } = req.body;

  const currentUser = req.session.currentUser._id;

  User.findByIdAndUpdate(
    currentUser,
    { picture, weight, height, lifestyle, alergies, gender, age },
    { new: true }
  )
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Update current user plan
apiRouter.patch("/user/premium", (req, res) => {
  const currentUser = req.session.currentUser._id;

  let premiumState;

  User.findById(currentUser)
    .then((user) => {
      premiumState = !user.premium;

      return User.update(
        { _id: currentUser },
        { premium: premiumState },
        { new: true }
      );
    })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Save C.C. details
apiRouter.put("/user/cc", (req, res) => {
  const currentUser = req.session.currentUser;

  const { creditCard } = req.body;

  User.findByIdAndUpdate(currentUser, { creditCard }, { new: true })
    .then((updateUser) => {
      res.status(200).json(updateUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//Save User personal details
apiRouter.patch("/user/det", (req, res) => {
  const currentUser = req.session.currentUser;

  const { weight, height, lifestyle, alergies, gender, age } = req.body;

  User.findByIdAndUpdate(
    currentUser,
    { weight, height, lifestyle, alergies, gender, age },
    { new: true }
  )
    .then((updateUser) => {
      res.status(200).json(updateUser);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = apiRouter;
