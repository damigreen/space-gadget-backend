const mongoose = require('mongoose');
const config = require('./src/utils/config');
const { v4: uuidv4 } = require('uuid');
const Product = require('./src/models/product');
const Category = require('./src/models/category');
const PhoneDetail = require('./src/models/phoneDetails');

const mongoUrl= config.MONGO_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(result => console.log(`connected to ${mongoUrl}`))
  .catch(e => { console.log(`Error connecting ${e.message}`);});


const product = new Product({
  product_id: uuidv4(),
  product_SKU:  "",
  product_name: "Samsung",
  product_description: "Samsung Galaxy A10 smartphone was launched in February 2019. The phone comes with a 6.20-inch touchscreen display. Samsung Galaxy A10 is powered by an octa-core Samsung Exynos 7884 processor. It comes with 2GB of RAM. The Samsung Galaxy A10 runs Android Pie and is powered by a 3400mAh battery.",
  // supplier_id: "",
  // category_id: "",
  quantity_per_unit: 10,
  unit_price: 100000,
  discount_price: "",
  available_colors: ['green', 'black', 'blue', 'gold'],
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

const phoneDetail = new PhoneDetail({
  name: "Samsung Galaxy",
  brand: "A10",
  size: "6.13 x 2.98 x 0.31 in",
  ROM: "32GB",
  RAM: "2GB",
  OS: "Andriod 9",
  camera: "13MP",
  color: "Green"
});


// const subCategory = new SubCategory({
//   subCategory_id: uuidv4(),
//   subCategory_name: 'Smartphones'
// });



// product.save().then(() => {
phoneDetail.save().then(() => {
// category.save().then(() => {
  console.log('Saved In DB:=============');
  mongoose.connection.close();
}).catch(error => console.log(error));
