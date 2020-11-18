const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const productSchema = mongoose.Schema({
  product_id: String,
  product_SKU: { type: String, unique: true, required: true},
  product_name: { type: String, required: true},
  product_model: { type: String, unique: true, required: true},
  product_description: String,
  suplier_id: String,
  quantity_per_unit: Number,
  unit_price: { type: Number, required: true},
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
  },
  processor: String,
  operating_system: String,
  video_card: String,
  hard_drive: String,
  // slots: String,
  wireless: String

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
productSchema.plugin(uniqueValidator);

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Product', productSchema);
