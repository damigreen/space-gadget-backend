const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  customer_id: String,
  customer_email: String,
  customer_first_name: String,
  customer_last_name: String,
  customer_city: String,
  customer_state: String,
  customer_zip:String,
  // customer_verification_code:String,
  customer_phone:String,
  customer_address:String,
  customer_address2:String,
  customer_country:String,
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
