const mongoose = require("mongoose");
const userModel = require("../model/user");

class User {
  constructor() {
    this.connectToDatabase();
  }

  async connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async createUser(email, password, username) {
    try {
      const userData = new userModel({
        username: username,
        email: email,
        password: password,
      });

      console.log("Creating user:", userData);

      const savedUser = await userData.save();
      console.log("User created successfully:", savedUser);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  authUser() {
    // Implementation to authenticate user
  }

  registerUser() {
    // Implementation to register user
  }
}

module.exports = User;
