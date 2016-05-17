'use strict';

var _ = require('lodash');
var Document = require('./document.model');

// Get list of documents
exports.index = function(req, res) {
  Document.find(function (err, documents) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(documents);
  });
};

// Get a single document
exports.show = function(req, res) {
  Document.findById(req.params.id).populate('case').exec( function (err, document) {
    if(err) { return handleError(res, err); }
    if(!document) { return res.status(404).send('Not Found'); }
    return res.json(document);
  });
};

// Creates a new document in the DB.
exports.create = function(req, res) {
  Document.create(req.body, function(err, document) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(document);
  });
};

// Updates an existing document in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Document.findById(req.params.id, function (err, document) {
    if (err) { return handleError(res, err); }
    if(!document) { return res.status(404).send('Not Found'); }
    var updated = _.merge(document, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(document);
    });
  });
};

// Deletes a document from the DB.
exports.destroy = function(req, res) {
  Document.findById(req.params.id, function (err, document) {
    if(err) { return handleError(res, err); }
    if(!document) { return res.status(404).send('Not Found'); }
    document.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
