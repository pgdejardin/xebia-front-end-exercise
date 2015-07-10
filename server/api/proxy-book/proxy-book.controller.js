'use strict';

var _ = require('lodash');
var ProxyBook = require('./proxy-book.model');

// Get list of proxy-books
exports.index = function(req, res) {
  ProxyBook.find(function (err, proxy-books) {
    if(err) { return handleError(res, err); }
    return res.json(200, proxy-books);
  });
};

// Get a single proxy-book
exports.show = function(req, res) {
  ProxyBook.findById(req.params.id, function (err, proxy-book) {
    if(err) { return handleError(res, err); }
    if(!proxy-book) { return res.send(404); }
    return res.json(proxy-book);
  });
};

// Creates a new proxy-book in the DB.
exports.create = function(req, res) {
  ProxyBook.create(req.body, function(err, proxy-book) {
    if(err) { return handleError(res, err); }
    return res.json(201, proxy-book);
  });
};

// Updates an existing proxy-book in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  ProxyBook.findById(req.params.id, function (err, proxy-book) {
    if (err) { return handleError(res, err); }
    if(!proxy-book) { return res.send(404); }
    var updated = _.merge(proxy-book, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, proxy-book);
    });
  });
};

// Deletes a proxy-book from the DB.
exports.destroy = function(req, res) {
  ProxyBook.findById(req.params.id, function (err, proxy-book) {
    if(err) { return handleError(res, err); }
    if(!proxy-book) { return res.send(404); }
    proxy-book.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}