const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const config = require('./utils/config');
const productRouter = require('./router/productRouter')

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
  

app.use('/api/products', productRouter);
app.use(bodyParser.json());
app.use(express.json());


app.get('/ping', (req, res) => {
  res.send('PONG---------------------------');
});


module.exports = app;
