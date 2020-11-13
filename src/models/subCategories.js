const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
  subCategory_id: String,
  subCategory_name: String,
  subCategory_desc: String,
  // subCategory_image: String,
  // subCategory_status: String
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});


subCategorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('SubCategory', subCategorySchema);
