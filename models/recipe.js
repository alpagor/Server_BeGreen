const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  preptime: {
    type: String,
    required: true,
  },
  cooktime: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
    required: true,
    enum: [
      "glutenFree",
      "dairyFree",
      "pulsesFree",
      "nutFree",
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
    ],
  },
  type: {
    type: [String],
    required: true,
    enum: ["breakfast", "lunch", "dinner"],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
