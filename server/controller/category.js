const categoryDb = require("../db/category");
const Category = new categoryDb();

async function createCategory(req, res) {
  const { name, description } = req.body;
  try {
    const exists = await Category.getCategory(name);
    if (!exists) {
      await Category.createCategory(name, description);
      return res.status(200).json({ message: "Category created succesfully!" });
    }

    return res.status(400).json({
      message: "Error on creating an category! Category exists or invalid!",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = createCategory;
