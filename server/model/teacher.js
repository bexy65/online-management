const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Teacher = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  subject: String,
});

const TeacherModel = mongoose.model("Teacher", Teacher);

module.exports = TeacherModel;
