const express = require("express");
const categoryController = require("../controller/category");

const router = express.Router();

router.post("/category", categoryController);

module.exports = router;
