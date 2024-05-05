const User = require("../db/user");
const user = new User();

async function register(req, res) {
  const { username, email, password } = req.body;
  try {
    const isExists = await user.getUser(email);
    if (!isExists) {
      await user.createUser(email, password, username);
      return res.status(201).json({ message: "User created succesfully!" });
    }
    return res.status(400).json({ message: "Email exists or invalid" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = register;
