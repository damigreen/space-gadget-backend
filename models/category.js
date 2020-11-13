const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  category_id: String,
  category_name: String,
  category_desc: String,
  category_image: String,
  category_status: String
});


categorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Category', categorySchema);
