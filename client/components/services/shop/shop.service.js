'use strict';

angular.module('frontEndExerciseApp')
  .service('shopService', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //var orderUrl = '/api/order';
    var cartUrl = '/api/cart';

    return {
      checkout: function(cart) {
        $http.post(cartUrl + '/checkout', cart);
      }
    }
  });
