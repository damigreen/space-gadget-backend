const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const config = require('./utils/config');
const productRouter = require('./router/productRouter')
const computersRouter = require('./router/computersRouter');
const smokeProductRouter = require('./router/smokeProductRouter');
const accessoriesProduct = require('./router/accessoriesProduct');
const cors = require("cors");


// const Product = require('../models/product');
// const PhoneDetail = require('../models/product');

const mongoUrl = config.MONGO_URI;


mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`connected to MongoDB`))
  .catch(e => console.log(`Error connecting to mongoDB ${e.message}`));


// const firstProduct = await Product.findOne({product_name: "Samsung"});
// const firstProduct = Product.findOne({product_name: "Samsung"});
// const nameOfSamsung = PhoneDetail.find({});
// console.log(firstProduct);
// console.log(nameOfSamsung);
  

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/products/mobile-phones', productRouter);
app.use('/api/products/computers', computersRouter);
app.use('/api/products/smoke-products', smokeProductRouter);
app.use('/api/products/accessories', accessoriesProduct);


app.get('/ping', (req, res) => {
  res.send('PONG---------------------------');
});


module.exports = app;
