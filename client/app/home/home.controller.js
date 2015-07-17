'use strict';

angular.module('frontEndExerciseApp')
  .controller('HomeCtrl', function($scope, booksService) {

    $scope.message = 'Hello';
    $scope.books = [];

    var init = function() {
      booksService.getBooks()
        .success(function(res) {
          console.debug(res);
          $scope.books = res;
        })
        .error(function(err) {
          console.error(err);
        });
    };

    init();

  });
