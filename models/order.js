const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  order_id: Number,
  order_number: Number,
  customer_id: String,
  payment_id: Number,
  order_date: Date,
  // ShipDate: Date,
  Require_date:Date,
  Shipper_id: Number,
  // SalesTax
  // TimeStamp
  // transaction_status
  // ErrLoc
  // ErrMsg
  Fulfilled: Boolean,
  Deleted: Boolean,
  Paid: Boolean,
  PaymentDate: Date
});

module.epxorts = mongoose.model('ORDER', orderSchema);