'use strict';

angular.module('frontEndExerciseApp')
  .controller('CartCtrl', function($scope, $modal, ngCart, booksService, shopService) {

    $scope.items = 0;

    $scope.httpSettings = {
      url: '/api/carts/checkout',
      successCallback: function(res) {
        console.log(res);
        $modal.open({
          templateUrl: 'order-success.tpl.html',
          controller: 'OrderModalCtrl',
          size: 'sm'
        });
        ngCart.empty();
        $scope.items = 0;
      },
      errorCallback: function(err) {
        console.log(err);
      }
    };

    $scope.$on('ngCart:change', function() {
      $scope.items = ngCart.getTotalItems();
      getPromotions();
    });

    function calculateReduction(offers) {
      var reductions = [];
      _.forEach(offers.offers, function(offer) {
        switch (offer.type) {
          case 'percentage':
            reductions.push(ngCart.getSubTotal() * offer.value / 100);
            break;
          case 'minus':
            reductions.push(offer.value);
            break;
          case 'slice':
            reductions.push((ngCart.getSubTotal() / offer.sliceValue >> 0) * offer.value); // jshint ignore:line
            break;
        }
      });
      return reductions;
    }

    function getPromotions() {
      var isbnList = _.pluck(ngCart.getItems(), '_id');
      if (!_.isEmpty(isbnList)) {
        booksService.getPromotions(isbnList).success(function(res) {
          var reductions = calculateReduction(res);
          ngCart.setShipping(-Math.max.apply(Math, reductions));
        }).error(function(err) {
          console.error(err);
        });
      }
    }

    $scope.checkout = function() {
      console.log('items to checkout', ngCart.getItems());
      shopService.checkout().success().error();
    };

    var init = function() {
      ngCart.setTaxRate(0);
      getPromotions();
      $scope.items = ngCart.getTotalItems();
    };

    init();
  });
