const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  customer_id: String,
  email: String,
  first_name: String,
  last_name: String,
  active: Boolean,
  inserted_at: Date,
  updated_at: Date
});


customerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Customer', customerSchema);
