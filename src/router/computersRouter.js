const computersRouter = require('express').Router();
const ProductLaptop = require('../models/productLaptop');

computersRouter.get('/', async (req, res, next) => {
  try {
    const allComputers = await ProductLaptop.find({});
    res.json(allComputers.map(com => computersRouter.toJSON()));
  } catch (e) {
    console.log(`Error occured ${e}`);
    next(e);
  }
});

computersRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    console.log("Adding laptop:=================================");

    const newProductLaptop = await new ProductLaptop({
      // product_id: uuidv4(),
      product_SKU:  body.product_SKU,
      product_name: body.product_name,
      product_model: body.product_model,
      product_description: body.product_description,
      quantity_per_unit: body.product_per_unit,
      unit_price: body.unit_price,
      discount_price: body.discount_price,
      available_colors: body.available_colors,
      product_image: body.product_image,
      inserted_at: new Date(),
      updated_at: new Date(),
      camera: String,
      battery: body.battery,
      wireless: {
        wifi: body.wireless.wifi,
        bluetooth: body.wireless.bluetooth
      },
      body: {
        dimension: body.body.dimensions,
        weight: body.body.weight
      },
      misc: {
        colors: body.misc.colors,
        models: body.misc.models
      },
      processor: body.processor,
      operating_system: body.operating_system,
      video_card: body.video_card,
      hard_drive: body.hard_drive,
    });

    await newProductLaptop.save();
    res.json(newProductLaptop.toJSON());
  } catch (e) {
    console.log(`error ${e}`);
    next(e);
  }
});

module.exports = computersRouter;
