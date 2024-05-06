const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.post("/products", productController.createProduct);
router.patch("/product", productController.updateProduct);

module.exports = router;
