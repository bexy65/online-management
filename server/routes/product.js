const express = require("express");
const productController = require("../controller/product");

const router = express.Router();

router.post("/products", productController);

module.exports = router;
