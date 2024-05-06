const express = require("express");
const categoryController = require("../controller/category");

const router = express.Router();

router.post("/categories", categoryController.createCategory);
router.patch("/category", categoryController.updateCategory);

module.exports = router;
