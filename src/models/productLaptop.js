const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const productLaptopSchema = mongoose.Schema({
  product_id: String,
  product_SKU: { type: String, unique: true, required: true},
  product_name: { type: String, required: true},
  product_model: { type: String, unique: true, required: true},
  product_description: String,
  suplier_id: String,
  quantity_per_unit: Number,
  unit_price: { type: Number, required: true},
  product_image: String,
  product_color: String,
  discount_price: Number,
  inserted_at: Date,
  updated_at: Date,
  battery: String,
  camera: String,
  diaplay: String,
  memory: String,
  processor: String,
  operating_system: String,
  video_card: String,
  hard_drive: String,
  body: {
    dimension: String,
    weight: String,
  },
  wireless: {
    wifi: String,
    bluetooth: String
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
});
productLaptopSchema.plugin(uniqueValidator);

productLaptopSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('ProductLaptop', productLaptopSchema);
