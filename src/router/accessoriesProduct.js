const express = require("express");
const AccessoriesProduct = require("../models/accessoriesProduct");

const accessoriesRouter = express.Router();

accessoriesRouter.get("/", async (req, res) => {
  res.send("God is good:====================");
});


accessoriesRouter.post("/", async (req, res) => {
  const body = req.body;
  
  try {
    const newAccessory = await new AccessoriesProduct({
      product_SKU: body.product_SKU,
      product_name: body.product_name,
      product_model: body.product_model,
      product_image: body.product_image,
      product_color: body.product_color,
      product_colors: body.product_colors,
      product_description: body.product_description,
      product_features: body.product_features,
      product_specification: body.product_specification,
      product_content: body.product_content,
    });
  
    await newAccessory.save();
    res.json(newAccessory.toJSON());
    

  } catch (err) {
    console.log(err);
    next(err);
  }

});

module.exports = accessoriesRouter;
