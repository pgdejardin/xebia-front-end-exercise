'use strict';

var express = require('express');
var controller = require('./cart.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.findByUser);
router.get('/:id', controller.show);
//router.post('/', controller.create);
//router.put('/:id', controller.update);
//router.patch('/:id', controller.update);
//router.delete('/:id', controller.destroy);
router.post('/checkout', auth.isAuthenticated(), controller.checkout);

module.exports = router;
