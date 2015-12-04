/*global angular */
'use strict';

angular.module('vexApp')
  .directive('cashFlow', function (FS) {
    return {
      templateUrl: 'statements/cashflow.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });