'use strict';

describe('Service: shop', function() {

  // load the service's module
  beforeEach(module('frontEndExerciseApp'));

  // instantiate service
  var shop;
  beforeEach(inject(function(_shop_) {
    shop = _shop_;
  }));

  it('should do something', function() {
    expect(!!shop).toBe(true);
  });

});
