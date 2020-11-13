const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  product_id: String,
  SKU: String,
  product_name: String,
  product_description: String,
  suplier_id: String,
  quantity_per_unit: Number,
  unit_price: Number,
  discount_price: Number,
  available_colors: { Type: [String] },
  product_image: String,
  inserted_at: Date,
  updated_at: Date,
  category_id: {
    type: mongoose.Schema.type.ObjectId,
    ref: 'Category'
  },
  subCategory_id: {
    type: mongoose.Schema.Type.ObjectId,
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
