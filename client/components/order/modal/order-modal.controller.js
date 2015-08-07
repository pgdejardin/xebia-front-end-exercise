/**
 * Created on 06/08/2015 by pdejardi
 * for xebia-front-end-exercise
 */

angular.module('frontEndExerciseApp')
  .controller('OrderModalCtrl', function($scope, $modalInstance) {

    'use strict';

    $scope.ok = function() {
      $modalInstance.close();
    };

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

  });
