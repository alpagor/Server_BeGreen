const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  picture: {type: String, required: true},
  password: {type: String, required: true},
  premium: {type: Boolean, required: true},
  diet: {type: String, required: true, enum: ["vegan", "ovoLactoVegetarian", "ovoVegetarian", "lactoVegetarian"]},
  weight: {type: Number, required: true},
  height: {type: Number, required: true},
  lifestyle: {type: String, required: true, enum: ["sedentary", "amateurSportlife", "proSportlife", "stressfullJob", "sleeplessness"]},
  alergies: {type: String, required: true, enum: ["celiac", "dairy", "pulses", "nuts"]},
  gender: {type: String, required: true, enum: ["man", "woman", "nonBinary"]},
  age: {type: Number, required: true},
  creditCard: {type: String, required: true},
  menus: [{type: Schema.Types.ObjectId,ref:'Menu'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;