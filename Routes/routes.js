const express = require("express");
const routes = express.Router();
const Controller = require("../Controller/productController.js");
routes.get("/",)
routes.get("/homePageLoader",Controller.homePageLoader);
routes.post("/addProduct",Controller.addNewProduct);
routes.delete("/delete",Controller.deleteOneProduct);
routes.put("/updateProductImage",Controller.updateOneProductOnImage);
routes.put("/updateProductInformation",Controller.updateProductInformation);
routes.delete("/deleteOneImage",Controller.deleteOneImage);
module.exports = routes;