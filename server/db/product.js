const ProductModel = require("../model/products");
const DatabaseClient = require("./db");
const CategoryModel = require("../model/category");

class ProductService extends DatabaseClient {
  constructor() {
    super();
  }

  async createProduct(name, description, price, category, imageUrl) {
    try {
      const existingCategory = await CategoryModel.findOne({ name: category });
      console.log(existingCategory);
      if (!existingCategory) {
        throw new Error("Category not found");
      }
      const newProduct = new ProductModel({
        name,
        description,
        price,
        category,
        imageUrl,
      });
      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(name) {
    try {
      const product = await ProductModel.findOne({ name: name });
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(name, newData) {
    try {
      const product = await this.getProduct(name);

      if (!product) {
        throw new Error("Product not found");
      }

      const updatedProduct = await ProductModel.findOneAndUpdate(
        { name: name },
        newData,
        {
          new: true,
        }
      );

      console.log(updatedProduct);

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
