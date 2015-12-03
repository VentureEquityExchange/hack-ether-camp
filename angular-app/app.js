/* global angular */

var app = angular.module("vexApp", [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMaterial',
    'lumx',
    'ngMdIcons'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider){
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('grey')
      .warnPalette('grey');
});