const productRouter = require('express').Router();
const Product = require('../models/product');

productRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.find({}).populate('category_id', { name: 1, status: 1 });
    res.json(products.map(p => p.toJSON()));
  } catch (e) {
    console.log(`error ${e}`);
    next(e);
  }
});

productRouter.post('/', async (req, res, next) => {
  try {
    const body = req.body;

    const productExist = Product.find({ product_SKU: body.product_SKU});
    if (productExist) {
      // await res.json({ Error: "Cannot add the same product" });
      // console.log(productExist);
      console.log("I am here already:=================================");
    }

    const newProduct = await new Product({
      // product_id: uuidv4(),
      product_SKU:  body.product_SKU,
      product_name: body.product_name,
      product_model: body.product_model,
      product_description: body.product_description,
      // supplier_id: "",
      // category_id: "",
      quantity_per_unit: body.product_per_unit,
      unit_price: body.unit_price,
      discount_price: body.discount_price,
      available_colors: body.available_colors,
      product_image: body.product_image,
      inserted_at: new Date(),
      updated_at: new Date(),
      network: {
        technology: body.network.technology
      },
      body: {
        dimension: body.body.dimensions,
        weight: body.body.weight
      },
      display: {
        type: body.display.type,
        size: body.display.size,
        resolution: body.display.resolution
      },
      platform: {
        os: body.platform.os,
        chipset: body.platform.chipset,
      },
      memory: {
        internal: body.memory.internal
      },
      camera: {
        main: body.camera.main,
        selfie: body.camera.selfie
      },
      battery: {
        batteryType: body.battery.batteryType
      },
      misc: {
        colors: body.misc.colors,
        models: body.misc.models
      },
      processor: body.processor,
      operating_system: body.operating_system,
      video_card: body.video_card,
      hard_drive: body.hard_drive,
      wireless: {
        wifi: body.wireless.wifi,
        bluetooth: body.wireless.bluetooth
      }
    });

    await newProduct.save();
    res.json(newProduct.toJSON());
  } catch (e) {
    console.log(`error ${e}`);
    next(e);
  }
});

module.exports = productRouter;
