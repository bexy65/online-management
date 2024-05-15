const User = require("../db/user");
const user = new User();

async function register(req, res) {
  const { username, email, password, role, grade, subject } = req.body;
  try {
    const isExists = await user.getUser(email);

    if (isExists) {
      return res.status(400).json({ message: "Email exists or invalid" });
    }

    if (!role || (role !== "teacher" && role !== "student")) {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (role === "teacher") {
      await user.createTeacher(email, password, username, subject);
    }

    if (role === "student") {
      await user.createStudent(email, password, username, grade);
    }

    return res
      .status(200)
      .json({ message: `${username} created succesfully!` });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = register;
