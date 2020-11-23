const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const SmokeProductSchema = mongoose.Schema({
  name: String,
  model: String,
  features: {
    
  }
});
SmokeProductSchema.plugin(uniqueValidator);

SmokeProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Product', SmokeProductSchema);
