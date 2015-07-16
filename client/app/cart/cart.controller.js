'use strict';

angular.module('frontEndExerciseApp')
  .controller('CartCtrl', function($scope, ngCart) {
    $scope.message = 'Hello';

    var init = function() {
      ngCart.setTaxRate(0);
      ngCart.setShipping(-15.0);
    };

    init();
  });
