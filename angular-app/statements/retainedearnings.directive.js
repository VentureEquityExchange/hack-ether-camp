/*global angular */
'use strict';

angular.module('vexApp')
  .directive('retainedEarnings', function (FS) {
    return {
      templateUrl: 'statements/retainedearnings.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });