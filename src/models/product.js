const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  product_id: String,
  product_SKU: String,
  product_name: String,
  product_model: String,
  product_description: String,
  suplier_id: String,
  quantity_per_unit: Number,
  unit_price: Number,
  discount_price: Number,
  product_color: String,
  product_image: String,
  inserted_at: Date,
  updated_at: Date,
  network: {
    technology: String,
  },
  body: {
    dimensions: String,
    weight: String,
  },
  display: {
    displayType: String,
    size: String,
    resolution: String
  },
  platform: {
    os: String,
    chipset: String,
  },
  memory: {
    internal: String,
    // RAM: String
  },
  camera: {
    main: String,
    selfie: String
  },
  battery: {
    batteryType: String
  },
  misc: {
    colors: String,
    models: String
  },
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  subCategory_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory'
  },
  phoneDetailSchema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PhoneDetailSchema'
  }
  // category_id: String,
  //  size: String,
  // color: String,
  // product_specs: {
  //   model: String,
  //   color: String
  // },
  // MSRP: Number,
  //  availableSize: Number,
});


productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Product', productSchema);
