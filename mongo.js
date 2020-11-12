const mongoose = require('mongoose');
const config = require('./src/utils/config');
const { v4: uuidv4 } = require('uuid');

const mongoUrl= config.MONGO_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(result => console.log(`connected to ${mongoUrl}`))
  .catch(e => { console.log(`Error connecting ${e.message}`);});


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

  
  const Product = mongoose.model('Product', productSchema);

  const addProduct = new Product({
    
  })