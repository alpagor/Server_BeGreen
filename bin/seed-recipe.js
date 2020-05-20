const mongoose = require("mongoose");

require("dotenv").config();
const Recipe = require("./../models/recipe");

const recipe = [
  {
    name: "Vegan Chilli",
    img:
      "https://res.cloudinary.com/dxex3vutt/image/upload/v1589984820/BeGreen%20project%20M3/Easy-Vegan-Chilli-Con-Carne-2_cgbwup.jpg",
    preptime: "10 minutes",
    cooktime: "30 minutes",
    servings: 6,
    protein: 25,
    instructions: [
      "Heat the olive oil in a large saucepan.",
      "Sauté the garlic, onion, celery, carrots and peppers for a few minutes, on a medium heat, until softened.",
      "Add the cumin, chilli powder, salt and pepper and stir.",
      "Pour in the chopped tomatoes, kidney beans, lentils, soy mince and vegetable stock. Add in the extra flavourings, if using.",
      "Simmer for 25 minutes.",
      "Serve with some steamed basmati rice, some fresh torn coriander and a squeeze of lime juice. Enjoy!",
      "Freezes well. Keeps for up to 4 days refrigerated.",
    ],
    ingredients: [
      "2 tbsp olive oil",
      "3 cloves of garlic, minced",
      "1 large red onion, thinly sliced",
      "2 celery stalks, finely chopped",
      "2 medium carrots, peeled and finely chopped",
      "2 red peppers, roughly chopped",
      "1 tsp ground cumin",
      "1 tsp chili powder",
      "Salt and pepper, to taste",
      "800 g tinned chopped tomatoes",
      "400 g tin of red kidney beans, drained and rinsed",
      "100 g split red lentils",
      "400 g frozen soy mince",
      "250 ml vegetable stock",
    ],
    tags: [
      "dairyFree",
      "nutFree",
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
    ],
    type: ["lunch"],
  },
  {
    name: "Protein Breakfast Bars",
    img:
      "https://res.cloudinary.com/dxex3vutt/image/upload/v1589986378/BeGreen%20project%20M3/Paleo-Breakfast-Bars-1_ichamc.jpg",
    preptime: "5 minutes",
    cooktime: "15 minutes",
    servings: 12,
    protein: 10,
    instructions: [
      "Preheat the oven to 180C / 350F and line a brownie tin with parchment paper.",
      "In a large bowl, combine the coconut, seeds, nuts, raisins and cinnamon.",
      "In a large saucepan, melt the cashew butter with the maple syrup on a medium heat. Once it's well combined and smooth, remove from the heat and stir in the vanilla extract.",
      "Add the contents of the bowl to the saucepan and mix until everything is well combined. If you need to, you can add a small drop of water to help it stick together.",
      "Transfer to the brownie tin and press down as firmly as possible to create a flat, even layer.",
      "Bake for approximately 15 minutes until golden brown.",
      "Leave to cool completely before cutting into 12 bars. Keep in an air-tight tin for up to a week. Enjoy!",
    ],
    ingredients: [
      "1 cup desiccated coconut",
      "1/2 cup shelled hemp seeds",
      "1/2 cup sesame seeds",
      "1/2 cup pumpkin seeds",
      "1 1/2 cups mixed nuts, chopped into small chunks (I added cashews, walnuts, almonds & pistachios to a high-powered blender and pulsed for a few seconds)",
      "1/2 cup raisins",
      "1 tsp ground cinnamon",
      "1/2 cup cashew butter, or nut butter of your choice",
      "4 tbsp maple syrup or date paste",
      "1 tsp vanilla extract",
    ],
    tags: [
      "dairyFree",
      "glutenFree",
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
    ],
    type: ["breakfast"],
  },
  {
    name: "Teriyaki Tofu Stir Fry",
    img:
      "https://res.cloudinary.com/dxex3vutt/image/upload/v1589985306/BeGreen%20project%20M3/teriyaki-tofu-stir-fry-1_pun8bl.jpg",
    preptime: "10 minutes",
    cooktime: "20 minutes",
    servings: 4,
    protein: 19,
    instructions: [
      "Prepare the Tofu: cut the block of tofu in half. Place each half in 2 clean paper towels one at a time and gently press/squeeze to remove excess stored liquid (without breaking up the tofu). ",
      "Cut the tofu into 1/2-inch cubes and pan fry on medium-high heat in a non-stick pan with 1 teasp cooking oil.",
      "Mix and turn frequently until all the water is burned off and the tofu is lightly golden brown on most sides (be sure not to burn the tofu). If you find that the tofu is sticking to the pan, add a little more oil. ",
      "While the tofu is cooking, continue on to the rest of the recipe.",
      "Once the tofu is done, add 1 tbsp tamari (or soy sauce) and toss once more. Set the tofu aside in a bowl.",
      `Using a wet paper napkin, quickly wipe down the non-stick pan while it's still hot.`,
      "Prepare the Dish: whisk all the sauce ingredients in a small bowl and set aside.",
      "Prep any veggies. For asparagus, trim the bottom of the spheres and cut them into 2-inch long pieces. For any other veggies, dice them to preferred size.",
      "Once the tofu is done cooking and set aside, quickly wipe down and use the same non-stick pan to saute the veggies.",
      "Heat 1 teasp cooking oil on medium-high heat. Add in the diced veggies and saute until cooked through, but still slightly crispy. ",
      "Add in the pan-fried tofu. ",
      "Add in the sauce. Turn the heat down to medium and let it cook until the sauce starts to thicken and coat the tofu and veggies. ",
      "Taste and adjust flavor if needed with additional tamari and/or coconut sugar.",
      "If using, mix in the red chili paste and green onions. Mix once more. ",
      "Turn off the heat and serve over cooked quinoa.",
    ],
    ingredients: [
      "14 oz firm tofu",
      "1 pound asparagus , or ~2 cups of any other veggies",
      "1 tbsp Tamari , or soy sauce",
      "2 tbso green onions , finely chopped",
      "2 teasp red chili sauce (optional)",
      "2 teasp cooking oil",
      "For the Sauce: 3 tbsp Tamari , or soy sauce",
      "1 tbsp sesame oil",
      "1.5 tbsp rice vinegar",
      "5 cloves garlic , minced",
      "1/2 tbsp ginger , freshly grated",
      "1/4 cup coconut sugar , or maple syrup",
      "2 teasp corn starch",
      "1/2 cup water",
      "For Serving: 4 cups quinoa , cooked (or brown rice)",
    ],
    tags: [
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
      "dairyFree",
    ],
    type: ["lunch", "dinner"],
  },
  {
    name: "Chocolate Protein Shake",
    img:
      "https://res.cloudinary.com/dxex3vutt/image/upload/v1589988528/BeGreen%20project%20M3/protein-shake2_bamosl.jpg",
    preptime: "5 minutes",
    cooktime: "0 minutes",
    servings: 1,
    protein: 20,
    instructions: [
      "Make sure your bananas and blueberries are completely frozen to ensure the right ice cream-like consistency.",
      "To freeze the bananas, peel and chop ripe bananas into 1″ pieces. Freeze in a single layer on a baking sheet.",
      "When frozen all the way through transfer the banana pieces to a ziplock bag.",
      "Return to the freezer and store for up to three months.",
      "When ready to use, just toss them in your blender with the rest of your smoothie ingredients.",
      "Make sure to blend your ingredients until they are completely smooth.",
      "If your smoothie is too thick, add additional almond milk, 2 tablespoons at a time, until you have a pourable consistency.",
      "This blueberry smoothie bowl should be eaten immediately!",
    ],
    ingredients: [
      "1 cup chocolate almond milk",
      "2 frozen bananas sliced",
      "1/4 cup peanut flour",
      "1-2 tablespoons chia seeds or hemp hearts, optional",
    ],
    tags: [
      "glutenFree",
      "dairyFree",
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
    ],
    type: ["breakfast"],
  },
  {
    name: "Mongolian Seitan",
    img:
      "https://res.cloudinary.com/dxex3vutt/image/upload/v1589987921/BeGreen%20project%20M3/vegan-mongolian-beef-mongolian-seitan-vegetarian-meatless-1_r0gqaj.jpg",
    preptime: "10 minutes",
    cooktime: "20 minutes",
    servings: 6,
    protein: 29,
    instructions: [
      "To make the sauce: Heat the vegetable oil in a small saucepan over medium heat. Add the ginger and garlic; stir constantly. After 30 seconds, add the five spice (if using) and red pepper flakes, and cook for 30-60 seconds more, until fragrant.",
      "Add the soy sauce and coconut sugar and stir well. Reduce the heat to medium-low, and let simmer until the coconut sugar is dissolved and slightly reduced, about 5-7 minutes, stirring occasionally.",
      "Whisk together the cornstarch and cold water, then add it to the pan and stir. Cook for 2-3 more minutes, until the sauce becomes glossy and thickened slightly. Reduce the heat to the lowest setting and keep simmering gently until ready to add to the seitan.",
      "To make the seitan: In a skillet, heat the vegetable oil over medium-high heat. Add the seitan and cook, stirring frequently, for about 4-5 minutes or until slightly browned and crisped around the edges.",
      "Reduce the heat to low and add the sauce to the pan. Stir to coat all of the seitan pieces, and continue cooking until the sauce has adhered to the seitan. Remove from the heat and serve hot, with rice and/or vegetables of choice, and garnished with sesame seeds and scallions if desired.",
    ],
    ingredients: [
      "For the Mongolian beef-less sauce: 2 tsp vegetable oil ",
      "1/2 tsp minced or grated ginger",
      "3 cloves minced or grated garlic",
      "1/3 tsp Chinese five spice (optional)",
      "1/3 tsp red pepper flakes",
      "1/2 cup low-sodium soy sauce",
      "1/2 cup + 2 tbsp coconut sugar (or use a scant 1/2 cup brown sugar)",
      "2 tsp cornstarch",
      "2 tbsp cold water",
      "For the crisped seitan: 1 and 1/2 tbsp vegetable oil ",
      "1 lb homemade seitan (16 oz.) (or use store-bought seitan), cut into 1-inch pieces",
      "For serving: toasted sesame seeds (optional)",
      "sliced scallions (optional)",
    ],
    tags: [
      "nutFree",
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
    ],
    type: ["lunch", "dinner"],
  },
  {
    name: "Vegan Samosa Pie",
    img:
      "https://res.cloudinary.com/dxex3vutt/image/upload/v1589992237/BeGreen%20project%20M3/Vegan-Samosa-Pie-3_kats3l.jpg",
    preptime: "15 minutes",
    cooktime: "20 minutes",
    servings: 4,
    protein: 26,
    instructions: [
      "Preheat the oven to 180C / 350F. Let your filo pastry sit at room temperature so it's easier to work with later on.",
      "Bring a large pot of water to a boil and cook the potatoes until soft. Add the peas in to cook during the last minute. Once cooked, drain and mash.",
      "Meanwhile, in a large frying pan, heat the oil and saute the onions and garlic until softened. Add the curry powder, coriander and chili powder and cook for a further minute before adding the soy mince. Add a drop of water and cook for 10 minutes on a medium heat.",
      "Combine the mash mixture with the mince and season with salt and pepper. Add some more water if it's a little dry.",
      "Transfer to an oven dish and smooth into an even layer.",
      "Unfold your filo pastry and start layering it on top of the mince mixture, sheet by sheet, giving it a brush with oil between each layer. I used ten layers (five sheets folded in half.) Give a final brushing with oil and slice 4 slits into the top, to allow some air to escape.",
      "Cook for 20 minutes until golden and crisp on top. Alternatively, you can chill or freeze this dish before cooking in the oven.",
    ],
    ingredients: [
      "2 medium potatoes, peeled and diced",
      "150 g frozen green peas",
      "1 tbsp vegetable oil",
      "1 large onion, diced",
      "3 cloves garlic, minced",
      "400 g frozen soy mince, or 2 x tins lentils, drained and rinsed",
      "2 tbsp curry powder",
      "1 tbsp dried coriander",
      "1 tsp chili powder",
      "Salt and pepper, to taste",
      "1 pack of filo pastry, defrosted (if frozen)",
      "2 tbsp vegetable oil",
    ],
    tags: [
      "dairyFree",
      "nutFree",
      "vegan",
      "ovoLactoVegetarian",
      "ovoVegetarian",
      "lactoVegetarian",
    ],
    type: ["lunch", "dinner"],
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`);
    return x.connection.dropDatabase();
  })
  .then(() => {
    const newCollection = Recipe.create(recipe);

    console.log(newCollection);
    newCollection
      .then((recipesCollection) => {
        console.log("recipesCollection", recipesCollection);
      })
      .catch((err) => {
        console.log("error", err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
