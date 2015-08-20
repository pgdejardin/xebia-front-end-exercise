'use strict';

describe('Controller: HomeCtrl', function() {

  // load the controller's module
  beforeEach(module('frontEndExerciseApp'));

  var HomeCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    //$httpBackend.expectGET('/api/things').respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
