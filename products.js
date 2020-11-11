const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  product_id: String,
  SKU: String,
  product_name: String,
  product_description: String,
  suplier_id: String,
  category_id: String,
  quantity_per_unit: Number,
  unit_price: Number,
  discount_price: Number,
  // MSRP: Number,
  //  availableSize: Number,
   available_colors: { Type: [String] },
  //  size: String,
   color: String,
   product_image: String,
   inserted_at: Date,
   updated_at: Date,
});


productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Product', productSchema);
