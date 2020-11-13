const mongoose = require('mongoose');
const config = require('./src/utils/config');
const { v4: uuidv4 } = require('uuid');

const mongoUrl= config.MONGO_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(result => console.log(`connected to ${mongoUrl}`))
  .catch(e => { console.log(`Error connecting ${e.message}`);});


const productSchema = mongoose.Schema({
  product_id: String,
  product_SKU: String,
  product_name: String,
  product_specs: {
    model: String,
    connectivity: String,
    screen_size: String,
    device_capacity: String,
    battery: String,
    weight: String
  },
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

const categorySchema = mongoose.Schema({
  category_id: String,
  category_name: String,
  category_desc: String,
  category_image: String,
  category_status: String
});

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

  
const Product = mongoose.model('Product', productSchema);
const Category = mongoose.model('Category', categorySchema);
const SubCategory = mongoose.model('SubCategory', subCategorySchema);

const product = new Product({
  product_id: uuidv4(),
  product_SKU:  "",
  product_name: "Samsung Galaxy",
  product_specs: {
    model: "A10",
    connectivity: "2G/3G/4G LTE",
    screen_size: "64GB ROM",
    device_capacity: "",
    battery: "Li-Ion 3400 mAh, non-removable"
  },
  product_description: "Samsung Galaxy A10 smartphone was launched in February 2019. The phone comes with a 6.20-inch touchscreen display. Samsung Galaxy A10 is powered by an octa-core Samsung Exynos 7884 processor. It comes with 2GB of RAM. The Samsung Galaxy A10 runs Android Pie and is powered by a 3400mAh battery.",
  // supplier_id: "",
  // category_id: "",
  quantity_per_unit: 10,
  unit_price: 100000,
  discount_price: "",
  available_color: ['green', 'black', 'blue', 'gold'],
  color: 'green',
  product_image: "images/samsung-galaxy-a10-green",
  inserted_at: new Date(),
  // updated_at: 
});



const category = new Category({
  category_id: uuidv4(),
  category_name: 'Mobile Phones & Tablet',
  category_desc: "",
  category_image: "",
  category_status: "Active"
});

const category1 = new Category({
  category_id: uuidv4(),
  category_name: 'Computers',
  category_desc: "",
  category_image: "",
  category_status: "Active"
});


const subCategory = new SubCategory({
  subCategory_id: uuidv4(),
  subCategory_name: 'Smartphones'
})

// product.save().then(() => {
category.save().then(() => {
  console.log('Saved In DB:=============');
  mongoose.connection.close();
}).catch(error => console.log(error));
