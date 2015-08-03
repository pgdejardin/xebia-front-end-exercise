'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  name: String,
  description: String,
  _id: String,
  items: Array,
  active: Boolean
});

module.exports = mongoose.model('Cart', CartSchema);
