'use strict';

angular.module('frontEndExerciseApp')
  .service('booksService', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var proxyURL = '/api/proxy/books';

    return {
      getBooks: function() {
        return $http.get(proxyURL + '/');
      },
      getPromotions: function(isbnList) {
        return $http.get(proxyURL + '/' + isbnList + '/commercialOffers');
      }
    };

  });
