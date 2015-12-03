/*global angular*/
'use strict';

angular.module('vexApp')
  .controller('MainCtrl', function ($scope, Main, $state, FS) {
    
    $scope.headline = "Financial Reporting (IFRS) Contract Demos | hack.ether.camp";
    $scope.subhead = "VΞNTURΞ ΞQUITY ΞXCHANGΞ (VΞX)";
    
    
    var year = 2015;
    var month = 11;
    var item = 'Revenue';
    var amount = 112358132134;
    var denomination = 'ETH';
    var comptroller = "0xdedb49385ad5b94a16f236a6890cf9e0b1e30392";
    
    FS.newEntry(year, month, item, amount, denomination, comptroller).then(function(txhash){
       console.log(txhash);
       var index = 0;
       return FS.getEntries(201511, 0);
    }).then(function(entries){
        console.log(entries);
    }).catch(function(error){
        console.log(error);
    });
    
    
    
    Main.coinbase().then(function(coinbase){
        console.log(coinbase);
        return Main.balance(coinbase);
    }).then(function(balance){
        console.log(balance);
        // $state.go('fs');
    }).catch(function(error){
        console.log(error);
    });

  });