'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Order Schema
 */
var OrderSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    default: ''
  },
  quantity: {
    type: Number,
    default: 1
  },
  tel: {
    type: String,
    default: ''
  },
  note: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: '订单处理中'
  },
  food: {
    type: Schema.ObjectId,
    ref: 'Food'
  }, 
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Order', OrderSchema);
