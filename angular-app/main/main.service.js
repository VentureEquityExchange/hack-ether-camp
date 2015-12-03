/*global angular*/
/*global Web3*/

'use strict';

angular.module('vexApp')
  .factory('Main', function ($q, $http) {
    // Service logic
    // ...
    var web3 = new Web3(new Web3.providers.HttpProvider("http://ventureequityexchange.on.ether.camp:8555/sandbox/608db2ed344c3b9eff398d2b4ccbfd71452b9245"));
    
    // Public API here
    return {
      coinbase: function () {
        // Returns the account set to the etherbase, coinbase.
        return $q(function(resolve, reject){
          web3.eth.getCoinbase(function(error, coinbase){
            if(error) {reject(error);}
            return resolve(coinbase);
          });
        });
      },
      getAccounts: function(){
        return $q(function(resolve, reject){
          web3.eth.getAccounts(function(error, accounts){
            if(error){reject(error);}
            return resolve(accounts);
          });
        });
      },
      balance : function(account){
        return $q(function(resolve, reject){
          web3.eth.getBalance(account, function(error, balance){
            if(error) {reject(error);}
            resolve(balance);
          });
        });
      }
    };
  });
