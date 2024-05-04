const express = require("express");
require("dotenv").config();
const User = require("./db/user");

const app = express();
const userController = new User();

app.get("/", (req, res) => {
  res.send(html);
  console.log("Sended");
});
userController.createUser("test@gmail.com", "12341234", "boba");
app.listen(3000, () => {
  console.log("Listening on port 3000\n");
});
