'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  items: Array,
  discount: Number,
  //tax: Number,
  //taxRate: Number,
  //subTotal: Number,
  total: Number,
  userId: String
});

module.exports = mongoose.model('Cart', CartSchema);
