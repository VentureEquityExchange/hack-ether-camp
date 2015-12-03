/*global angular*/
'use strict';

angular.module('vexApp')
  .config(function ($stateProvider) {
  	
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'MainCtrl'
      });
  });