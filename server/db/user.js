const DatabaseClient = require("../db/db");
const UserModel = require("../model/user");
const bcrypt = require("bcrypt");
const hashPassword = require("../utilities/util");

class User extends DatabaseClient {
  constructor() {
    super();
  }

  async getUser(email) {
    try {
      const user = await UserModel.findOne({email: email});
      return user;
    } catch (error) {
      throw error;
    }
  }

  async createUser(email, password, username) {
    try {
      const userData = new UserModel({
        username: username,
        email: email,
        password: await hashPassword(password),
      });
      const savedUser = await userData.save();
      return savedUser;
    } catch (error) {
      throw error;
    }
  }

  async authUser(email, password) {
    const user = await this.getUser(email);
    if (!user) throw err;
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw err;
    return isAuth;
  }
}

module.exports = User;
