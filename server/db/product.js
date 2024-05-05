const ProductModel = require("../model/products");

class ProductService {
  async createProduct(name, description, price, category) {
    try {
      const newProduct = new ProductModel({
        name,
        description,
        price,
        category,
      });
      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (error) {
      throw error;
    }
  }

  async getProduct(name) {
    try {
      const product = await ProductModel.findOne(name);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(name, newData) {
    try {
      const product = await ProductModel.findOne(name);

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
