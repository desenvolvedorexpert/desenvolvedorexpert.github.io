'use strict';

/**
 * @ngdoc service
 * @name welcomeApp.auth0
 * @description
 * # auth0
 * Factory in the welcomeApp.
 */
angular.module('welcomeApp')
  .factory('auth0', function($window) {
    var clientID = 'VRCKormzUAuTj06ObRh4iHyA1LhXX7NS';
    var domain = 'devexpert.auth0.com';

    // Public API here
    return new $window.Auth0LockPasswordless(clientID, domain);
  });
