'use strict';

angular.module('frontEndExerciseApp')
  .controller('SettingsCtrl', function($scope, User, Auth, shopService) {
    $scope.errors = {};
    $scope.orders = [];

    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if (form.$valid) {
        Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function() {
            $scope.message = 'Password successfully changed.';
          })
          .catch(function() {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
            $scope.message = '';
          });
      }
    };

    $scope.getCarts = function() {
      shopService.getCarts().success(function(res) {
        console.log(res);
        $scope.orders = res;
      }).error(function(err) {
        console.error(err);
      });
    };

    $scope.getCarts();

  });
