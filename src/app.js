const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const config = require('./utils/config');

const mongoUrl = config.MONGO_URI;


mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`connected to MongoDB`))
  .catch(e => console.log(`Error connecting to mongoDB ${e.message}`));

app.use(bodyParser.json());
app.use(express.json());


app.get('/ping', (req, res) => {
  res.send('PONG---------------------------');
});


module.exports = app;
