/*global angular*/
'use strict';

angular.module('vexApp')
  .config(function ($stateProvider) {
  	
    $stateProvider
      .state('fs', {
        url: '/financial-statement',
        templateUrl: 'fs/fs.html',
        controller: 'FSCtrl'
      });
  });