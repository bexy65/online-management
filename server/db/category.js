const CategoryModel = require("../model/category");
const DatabaseClient = require("./db");

class CategoryService extends DatabaseClient {
  async createCategory(name, description) {
    try {
      const newCategory = new CategoryModel({
        name,
        description,
      });
      const savedCategory = await newCategory.save();
      return savedCategory;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryService;
