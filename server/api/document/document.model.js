'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DocumentSchema = new Schema({
  case: {type: mongoose.Schema.Types.ObjectId , ref: 'Case'},
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Document', DocumentSchema);
