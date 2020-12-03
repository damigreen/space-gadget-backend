const express = require('express');
const SmokeProduct = require('../models/smokeProduct');
const smokeProductRouter = express.Router();

smokeProductRouter.get('/', async (req, res) => {

});

smokeProductRouter.post('/', async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    const newSmokeProduct = await new SmokeProduct({
      name: body.name,
      brand: body.brand,
      price: body.price,
      categories: body.categories,
      description: body.description,
      features: body.features
    });

    await newSmokeProduct.save();
    res.send(newSmokeProduct.toJSON());

  } catch (exception) {
    console.log(exception);
    next(exception);
  }
  
});

module.exports = smokeProductRouter;
