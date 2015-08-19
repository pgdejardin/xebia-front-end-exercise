'use strict';

describe('Service: shop', function() {

  // load the service's module
  beforeEach(module('frontEndExerciseApp'));

  // instantiate service
  var shopService;
  beforeEach(inject(function(_shopService_) {
    shopService = _shopService_;
  }));

  it('should do something', function() {
    expect(!!shopService).toBe(true);
  });

});
