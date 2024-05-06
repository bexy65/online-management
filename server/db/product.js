const ProductModel = require("../model/products");
const DatabaseClient = require("./db");

class ProductService extends DatabaseClient {
  constructor() {
    super();
  }

  async createProduct(name, description, price, category, imageUrl) {
    try {
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

      Object.assign(product, newData);

      const updatedProduct = await product.save();

      return updatedProduct;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductService;
