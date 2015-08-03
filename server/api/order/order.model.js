'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var OrderSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Order', OrderSchema);
