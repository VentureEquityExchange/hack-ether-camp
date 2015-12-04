/*global angular*/
'use strict';

angular.module('vexApp')
  .controller('FSCtrl', function ($scope, Main, FS, $mdDialog, $rootScope) {
    $rootScope.financialStatement = {
        income : {},
        cashFlow : {},
        financialPosition : {}
    };
    
    $scope.submit = function(){
        console.log($rootScope.financialStatement);
    }
    
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
    
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
    
    
    

  });