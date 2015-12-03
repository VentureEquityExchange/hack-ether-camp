/*global angular*/
'use strict';

angular.module('vexApp')
  .controller('FSCtrl', function ($scope, Main, FS) {
    
    console.log(FS.abi);
    
    $scope.headline = "Financial Statement | Contract Example";
    $scope.subhead = "VΞNTURΞ ΞQUITY ΞXCHANGΞ (VΞX)";
    
    
    Main.coinbase().then(function(coinbase){
        console.log(coinbase);
        return Main.balance(coinbase);
    }).then(function(balance){
        console.log(balance);
    }).catch(function(error){
        console.log(error);
    });

  });