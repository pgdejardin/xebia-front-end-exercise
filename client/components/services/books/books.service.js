'use strict';

angular.module('frontEndExerciseApp')
  .service('booksService', function($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var proxyURL = '/api/proxy';

    return {
      getBooks: function() {
        return $http.get(proxyURL + '/books');
      }
    };

  });
