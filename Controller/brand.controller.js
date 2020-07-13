const brandManagement  = require("../models/brand.model.js");

exports.addNewBrand = (req,res) =>{
    brandManagement.addNewBrandModel(req.body.brandName)
    .then(rows=>res.send({"Status":"Added"}))
    .catch(err=>res.send({"Status":"Add Field"}));
}
