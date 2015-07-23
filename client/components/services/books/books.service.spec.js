'use strict';

describe('Service: books', function() {

  // load the service's module
  beforeEach(module('frontEndExerciseApp'));

  // instantiate services
  var books, $httpBackend;

  beforeEach(inject(function(_booksService_, $injector) {
    books = _booksService_;
    $httpBackend = $injector.get('$httpBackend');

  }));

  afterEach(function() {
    //$httpBackend.verifyNoOutstandingExpectation();
    //$httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function() {
    expect(!!books).toBe(true);
  });

  it('should get the list of books', function() {
    $httpBackend.whenGET('/api/proxy/books/').respond(200, [{
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      title: 'Henri Potier à l\'école des sorciers',
      price: 35,
      cover: 'http://henri-potier.xebia.fr/hp0.jpg'
    }]);
    var promiseResult = null;
    books.getBooks().then(function(result) {
      promiseResult = result;
    });
    $httpBackend.flush();
    expect(promiseResult.status).toBe(200);
    expect(promiseResult.data).toEqual([{
      isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
      title: 'Henri Potier à l\'école des sorciers',
      price: 35,
      cover: 'http://henri-potier.xebia.fr/hp0.jpg'
    }]);
  });

  it('should get a list of discounts', function() {
    $httpBackend.whenGET('/api/proxy/books/c8fabf68-8374-48fe-a7ea-a00ccd07afff/').respond(200, {});
  });

});
