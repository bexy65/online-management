const express = require("express");
const categoryController = require("../controller/category");

const router = express.Router();

router.post("/categories", categoryController);

module.exports = router;
