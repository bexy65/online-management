const userDb = require("../db/user");
const jwt = require("jsonwebtoken");
const User = new userDb();

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.getUser(email);
    const isAuth = await User.authUser(email, password);

    if (!user || !isAuth) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, "secret", {
      expiresIn: "1h",
    });

    res.status(200).json({ token, message: "Logged in succesfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = login;
