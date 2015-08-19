'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

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
