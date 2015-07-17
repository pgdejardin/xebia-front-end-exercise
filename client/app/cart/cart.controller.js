'use strict';

angular.module('frontEndExerciseApp')
  .controller('CartCtrl', function($scope, ngCart, booksService) {

    $scope.$on('ngCart:change', function() {
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

    var init = function() {
      ngCart.setTaxRate(0);
      getPromotions();
    };

    init();
  });
