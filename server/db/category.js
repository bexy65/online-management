const CategoryModel = require("../model/category");

class CategoryService {
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
