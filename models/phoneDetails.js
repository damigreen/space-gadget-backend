const mongoose = require('mongoose');

const phoneDetailSchema = mongoose.Schema({
  name: String,
  brand: String,
  size: String,
  ROM: String,
  RAM: String,
  OS: String,
  camera: String,
  color: String,
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }
});

const PhoneDetailSchema = mongoose.model('PhoneDetailSchema', phoneDetailSchema);
