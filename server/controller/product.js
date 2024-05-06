const productDb = require("../db/product");
const Product = new productDb();

async function createProduct(req, res) {
  const { name, description, price, category, imageUrl } = req.body;
  try {
    const exists = await Product.getProduct(name);
    if (!exists) {
      await Product.createProduct(name, description, price, category, imageUrl);
      res
        .status(200)
        .json({ message: "Product has been created succesfully!" });
    }
    res
      .status(400)
      .json({ message: "Product has not been created, already exists!" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = createProduct;
