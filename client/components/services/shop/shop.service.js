'use strict';

angular.module('frontEndExerciseApp')
  .service('shopService', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //var orderUrl = '/api/order';
    var cartUrl = '/api/carts';

    return {
      checkout: function(cart) {
        return $http.post(cartUrl + '/checkout', cart);
      },
      getCarts: function () {
        return $http.get(cartUrl + '/');
      }
    };
  });
