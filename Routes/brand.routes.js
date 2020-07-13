const express = require('express');
const router = express.Router();
const Controller = require("../Controller/brand.controller.js");

router.post("/addNewBrand",Controller.addNewBrand);

module.exports = router;
