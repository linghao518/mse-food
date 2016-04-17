'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Food Schema
 */
var FoodSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Food name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    default: ''
  },
  temperature: {
    type: String,
    default: ''
  },
  material: {
    type: String,
    default: ''
  },
  imageURL: {
    type: String,
    default: ''
  },
  thumbnailURL: {
    type: String,
    default: ''
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Food', FoodSchema);
