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

});
