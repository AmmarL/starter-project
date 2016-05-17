'use strict';

var _ = require('lodash');
var Case = require('./case.model');

// Get list of items
exports.index = function(req, res) {
  Case.find().populate('documents').exec( function (err, items) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(items);
  });
};

// Get a single item
exports.show = function(req, res) {
  Case.findById(req.params.id).populate('documents').exec( function (err, item) {
  if(err) { return handleError(res, err); }
  if(!item) { return res.status(404).send('Not Found'); }
  return res.json(item);
});
};

// Creates a new item in the DB.
exports.create = function(req, res) {
  Case.create(req.body, function(err, item) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(item);
  });
};

// Updates an existing item in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Case.findById(req.params.id, function (err, item) {
    if (err) { return handleError(res, err); }
    if(!item) { return res.status(404).send('Not Found'); }
    var updated = _.merge(item, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(item);
    });
  });
};

// Deletes a item from the DB.
exports.destroy = function(req, res) {
  Case.findById(req.params.id, function (err, item) {
    if(err) { return handleError(res, err); }
    if(!item) { return res.status(404).send('Not Found'); }
    item.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
