'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var User = require('./../user/user.model');
var Cart = require('./cart.model');

var user = new User({
  provider: 'local',
  name: 'Fake User',
  email: 'test@test.com',
  password: 'password'
});

var cart = new Cart({
  items: [{
    id: "a460afed-e5e7-4e39-a39d-c885c05db861",
    name: "Henri Potier et la Chambre des secrets",
    price: 30,
    quantity: 1,
    total: 30
  }],
  discount: -1.2,
  date: new Date(),
  total: 28.8,
  userId: null
});

describe('Cart Model', function() {
  before(function(done) {
    // Clear users before testing
    User.remove().exec().then(function() {
      done();
    });
    // Clear carts before testing
    Cart.remove().exec().then(function() {
      done();
    });
  });

  afterEach(function(done) {
    User.remove().exec().then(function() {
      done();
    });
    Cart.remove().exec().then(function() {
      done();
    });
  });

  describe('GET /api/carts', function() {
    it('should respond with a 401 Unauthorized', function(done) {
      request(app)
        .get('/api/carts')
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.eql({});
          done();
        });
    });
  });

  describe('PUT /api/carts/checkout', function() {
    it('should respond with a 401 Unauthorized if the user checkout without being authenticated', function(done) {
      request(app)
        .post('/api/carts/checkout', cart)
        .expect(401)
        .end(function(err, res) {
          if (err) return done(err);
          res.body.should.be.eql({});
          done();
        });
    });
  });

});
