'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CaseSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  description: String,
  submitDate: Date,
  caseNumber: Number,
  caseOwner: String,
  clientName: String,
  documents: [ {type: mongoose.Schema.Types.ObjectId , ref: 'Document'} ]
}, {autoIndex:true});

module.exports = mongoose.model('Case', CaseSchema);
