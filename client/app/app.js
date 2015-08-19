'use strict';

angular.module('frontEndExerciseApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ngCart'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function($rootScope, $location, Auth, $templateCache) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        //noinspection JSUnresolvedVariable
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

    $templateCache.put('order-success.tpl.html', '<div class="modal-header"><h3 class="modal-title">Order validated!</h3></div><div class="modal-body">Your order has been validated.<br/>You can view it on your account page.</div><div class="modal-footer"><button class="btn btn-primary" ng-click="ok()">OK</button></div>');
    $templateCache.put('template/ngCart/summary.html', '<span>{{ ngCart.getTotalItems() }}<ng-pluralize count="ngCart.getTotalItems()" when="{1: \' item\', \'other\':\' items\'}"></ng-pluralize></span>');
  });
