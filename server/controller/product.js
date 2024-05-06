const productDb = require("../db/product");
const Product = new productDb();

class ProductController {
  async createProduct(req, res) {
    const { name, description, price, category, imageUrl } = req.body;
    try {
      const exists = await Product.getProduct(name);
      if (exists === null) {
        await Product.createProduct(
          name,
          description,
          price,
          category,
          imageUrl
        );
        res
          .status(200)
          .json({ message: "Product has been created successfully!" });
      } else {
        res
          .status(400)
          .json({ message: "Product has not been created, already exists!" });
      }
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }

  async updateProduct(req, res) {
    const { oldData, newData } = req.body;
    const { nameOld } = oldData;
    const { nameNew, descriptionNew, priceNew, categoryNew, imageUrlNew } =
      newData;

    try {
      const product = await Product.getProduct(nameOld);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      const dataToUpdate = {
        name: nameNew,
        description: descriptionNew,
        price: priceNew,
        category: categoryNew,
        imageUrl: imageUrlNew,
      };
      console.log(dataToUpdate.name);
      await Product.updateProduct(nameOld, dataToUpdate);

      res
        .status(200)
        .json({ message: "Product has been updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = new ProductController();
