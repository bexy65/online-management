const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
