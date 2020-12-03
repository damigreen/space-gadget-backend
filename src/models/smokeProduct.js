const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const SmokeProductSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: String,
  categories: String,
  price: Number,
  description: [{ type: String }],
  features: [{ type: String }]
});
SmokeProductSchema.plugin(uniqueValidator);

SmokeProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('SmokeProduct', SmokeProductSchema);
