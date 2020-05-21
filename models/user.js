const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  picture: { type: String, required: true },
  password: { type: String, required: true },
  premium: { type: Boolean, default: false },
  weight: { type: Number, default: 0 },
  height: { type: Number, default: 0 },
  lifestyle: {
    type: String,
    default: "other",
    enum: [
      "sedentary",
      "amateurSportlife",
      "proSportlife",
      "stressfullJob",
      "sleeplessness",
      "other",
    ],
  },
  alergies: { type: String, enum: ["celiac", "dairy", "pulses", "nuts"] },
  gender: {
    type: String,
    default: "nonBinary",
    enum: ["man", "woman", "nonBinary"],
  },
  age: { type: Number, default: 0 },
  creditCard: { type: String, default: 0 },
  menus: [{ type: Schema.Types.ObjectId, ref: "Menu" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
