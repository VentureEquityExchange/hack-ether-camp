/*global angular */
'use strict';

angular.module('vexApp')
  .directive('income', function (FS, $rootScope) {
    return {
      templateUrl: 'statements/income.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        scope.income = {
            items : [{
                label : 'Revenue',
                value : 0,
                note : ''
            },{
                label : 'Other Income',
                value : 0,
                note : ''
            },{
                label : 'Changes in Inventory of Finished Goods and Work in Progress',
                value : 0,
                note : ''
            },{
                label : 'Raw Material and Consumables Used',
                value : 0,
                note : ''
            },{
                label : 'Employee Salaries and Benefits',
                value : 0,
                note : ''
            },{
                label : 'Depreciation and Amortisation Expense',
                value : 0,
                note : ''
            },{
                label : 'Impairment of Property, Plant and Equipment',
                value : 0,
                note : ''
            },{
                label : 'Other Expenses',
                value : 0,
                note : ''
            },{
                label : 'Finance Costs',
                value : 0,
                note : ''
            },{
                label : 'Profit Before Tax',
                value : 0,
                note : ''
            },{
                label : 'Income Tax Expense',
                value : 0,
                note : ''
            },{
                label : 'Profit for the Year',
                value : 0,
                note : ''
            },{
                label : 'Beginning Retained Earnings', // <-- try to pull this from prior statement if exists
                value : 0,
                note : ''
            },{
                label : 'Dividends Paid',
                value : 0,
                note : ''
            },{
                label : 'Ending Retained Earnings',
                value : 0,
                note : ''
            }]
        };
        
        $rootScope.financialStatement.income = scope.income;     
      }
    };
  });