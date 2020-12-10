const mongoose = require("mongoose");

var uniqueValidator = require('mongoose-unique-validator');

const accessoriesProductSchema = new mongoose.Schema({
  product_SKU: String,
  product_name: String,
  product_model: String,
  product_image: String,
  product_color: String,
  product_description: [{ type: String }],
  product_features: [{ type: String }],
  product_specifications: [ { type: String }],
  product_content: [ {type: String }]
});
accessoriesProductSchema.plugin(uniqueValidator);

accessoriesProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("accessoriesProduct", accessoriesProductSchema);
