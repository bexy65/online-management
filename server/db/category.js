const CategoryModel = require("../model/category");
const DatabaseClient = require("./db");

class CategoryService extends DatabaseClient {
  constructor() {
    super();
  }

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

  async getCategory(name) {
    try {
      const category = await CategoryModel.findOne({ name: name });
      return category;
    } catch (error) {
      throw error;
    }
  }

  async updateCategory(name, newData) {
    try {
      const category = await this.getCategory(name);
      if (!category) {
        throw new Error("Category not found");
      }
      Object.assign(category, newData);
      const updatedCategory = await category.save();
      return updatedCategory;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryService;
