const mongoose = require("mongoose");

class DatabaseClient {
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
}

module.exports = DatabaseClient;
