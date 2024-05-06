const categoryDb = require("../db/category");
const Category = new categoryDb();

class CategoryController {
  async createCategory(req, res) {
    const { name, description } = req.body;
    try {
      const exists = await Category.getCategory(name);
      if (!exists) {
        await Category.createCategory(name, description);
        return res
          .status(200)
          .json({ message: "Category created succesfully!" });
      }

      return res.status(400).json({
        message: "Error on creating an category! Category exists or invalid!",
      });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }

  async updateCategory(req, res) {
    const { name, newName } = req.body;

    if (!name || !newName) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    try {
      const categoryNameToUpdate = await Category.getCategory(name);
      if (!categoryNameToUpdate) {
        res.status(400).json({
          message: "Error on updating category name! Category does not exists!",
        });
      }

      const data = {
        name: newName,
      };

      await Category.updateCategory(name, data);

      res.status(200).json({ message: "Updated sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = new CategoryController();
