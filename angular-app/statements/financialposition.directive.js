/*global angular */
'use strict';

angular.module('vexApp')
  .directive('financialPosition', function (FS) {
    return {
      templateUrl: 'statements/financialposition.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.fs = {
            currentAssets : [{
                label : 'Cash',
                value : 0,
                note : ''
            },{
                label : 'Trade and Other Receivables',
                value : 0,
                note : ''
            },{
                label : 'Inventories',
                value : 0,
                note : ''
            }],
            noncurrentAssets : [{
                label : 'Investment in Associate',
                value : 0,
                note : ''
            },{
                label : 'Property, Plant and Equipment',
                value : 0,
                note : ''
            },{
                label : 'Intangible Assets',
                value : 0,
                note : ''
            },{
                label : 'Deferred Tax Asset',
                value : 0,
                note : ''
            }],
            currentLiabilities : [{
                label : 'Bank Overdraft',
                value : 0,
                note : ''
            },{
                label : 'Trade Payables',
                value : 0,
                note : ''
            },{
                label : 'Interest Payable',
                value : 0,
                note : ''
            },{
                label : 'Current Tax Liability',
                value : 0,
                note : ''
            },{
                label : 'Provision for Warranty Obligations',
                value : 0,
                note : ''
            },{
                label : 'Current Portion of Employee Benefit Obligations',
                value : 0,
                note : ''
            },{
                label : 'Current Portion of Obligations Under Finance Leases',
                value : 0,
                note : ''
            }], 
            noncurrentLiabilities : [{
                label : 'Bank Loan',
                value : 0,
                note : ''
            },{
                label : 'Long-Term Employee Benefit Obligations',
                value : 0,
                note : ''
            },{
                label : 'Obligations Under Finance Leases',
                value : 0,
                note : ''
            }],
            equities : [{
                label : 'Share Capital',
                value : 0,
                note : ''
            },{
                label : 'Retained Earnings',
                value : 0,
                note : ''
            }]
        }  
      }
    };
  });