const productRouter = require('express').Router();
// const product = require('../../models/product');
const Product = require('../models/product');

productRouter.get('/', async(req, res, next) => {
  try {
    const products = await Product.find({}).populate('category_id', { name: 1, status: 1 });
    res.json(products.map(p => p.toJSON()));
  } catch (e) {
    console.log(`error ${e}`)
    next(exception);
  }
});

module.exports = productRouter;
