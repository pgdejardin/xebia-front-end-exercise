/**
 * Created on 7/16/15.
 */
'use strict';

var config = require('../../config/environment');
var request = require('request');
var _ = require('lodash');

var gatewayErrorHandler = function(err, res) {
  if (err.code === 'ECONNREFUSED') {
    res.status(504).send({error: err, message: 'le serveur n\'est pas disponible'});
  } else {
    console.log(err);
  }
};

exports.get = function(req, res) {
  var url = config.xebiaApiUrl + req.url;
  req.pipe(request.get(url, function errorHandler(error) {
    if (error) {
      gatewayErrorHandler(error, res);
    }
  })).pipe(res);
};

exports.post = function(req, res) {
  var url = config.xebiaApiUrl + req.url;
  req.pipe(request.post({uri: url, json: req.body, headers: req.headers}, function errorHandler(error) {
    if (error) {
      gatewayErrorHandler(error, res);
    }
  }), {end: false}).pipe(res);
};

exports.put = function(req, res) {
  var url = config.xebiaApiUrl + req.url;
  req.pipe(request.put({uri: url, json: req.body}, function errorHandler(error) {
    if (error) {
      gatewayErrorHandler(error, res);
    }
  }), {end: false}).pipe(res);
};
