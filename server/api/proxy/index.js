/**
 * Created on 7/16/15.
 */

'use strict';

var express = require('express');
var controller = require('./proxy.controller');

var router = express.Router();

router.get('/*', controller.get);
router.post('/*', controller.post);
router.put('/*', controller.put);

module.exports = router;
