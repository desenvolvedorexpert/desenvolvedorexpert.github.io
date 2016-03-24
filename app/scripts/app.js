'use strict';

/**
 * @ngdoc overview
 * @name welcomeApp
 * @description
 * # welcomeApp
 *
 * Main module of the application.
 */
angular
  .module('welcomeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    // set our app up to have pretty URLS
    $locationProvider.html5Mode(true);

  });
