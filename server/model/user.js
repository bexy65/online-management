const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  grade: Number,
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;
