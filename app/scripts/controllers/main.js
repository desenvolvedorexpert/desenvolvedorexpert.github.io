'use strict';

/**
 * @ngdoc function
 * @name welcomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the welcomeApp
 */
angular.module('welcomeApp')
  .controller('MainCtrl', function(auth0) {

    var vm = this;

    vm.login = function() {
      var options = {
        connections: ['facebook', 'github'],
        defaultLocation: 'BR',
        callbackURL: 'https://github.com/desenvolvedorexpert/desenvolvedorexpert.github.io/tree/develop#welcome',
        autoclose: true,
        focusInput: false,
        popup: false,
        socialBigButtons: true,
        rememberLastLogin: true,
        primaryColor: '#fc3',
        icon: 'http://dropbox.desenvolvedor.expert/devexpert.png',
        dict: {
          code: {
            codeInputPlaceholder: 'Seu código',
            footerText: '',
            headerText: 'Um email com o código, foi enviado para {email}.',
            resendLabel: 'Não conseguiu achar o código?'
          },
          networkOrEmail: {
            emailInputPlaceholder: 'yours@example.com',
            footerText: '',
            headerText: '',
            separatorText: 'você também pode informar apenas o seu email',
            smallSocialButtonsHeader: 'Baixar com'
          },
          signedIn: {
            success: 'Thanks for signing in.'
          },
          title: 'desenvolvedor.expert',
          welcome: 'Bem-vindo {name}!'
        }
      };
      auth0.socialOrEmailcode(options);
    };

    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
