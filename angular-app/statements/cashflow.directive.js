/*global angular */
'use strict';

angular.module('vexApp')
  .directive('cashFlow', function (FS, $rootScope) {
    return {
      templateUrl: 'statements/cashflow.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
          scope.cashflow = {
              operating : [{
                  label : 'Profit for the Year',
                  value : 0,
                  note : ''
              },{
                  label : 'Non-Cash Finance Costs',
                  value : 0,
                  note : ''
              },{
                  label : 'Non-Cash Income Tax Expense',
                  value : 0,
                  note : ''
              },{
                  label : 'Depreciation of Property, Plant and Equipment',
                  value : 0,
                  note : ''
              },{
                  label : 'Impairment Loss',
                  value : 0,
                  note : ''
              },{
                  label : 'Amortisation of Intangibles',
                  value : 0,
                  note : ''
              },{
                  label : 'Gain on Sale of Equipment',
                  value : 0,
                  note : ''
              },{
                  label : 'Decrease (Increase) in Inventories',
                  value : 0,
                  note : ''
              },{
                  label : 'Decrease (Increase) in Trade Payables',
                  value : 0,
                  note : ''
              },{
                  label : 'Decrease (Increase) in Employee Benefit Payables',
                  value : 0,
                  note : ''
              }],
              investing : [{
                  label : 'Proceeds from Sale of Equipment',
                  value : 0,
                  note : ''
              },{
                  label : 'Purchases of Equipment',
                  value : 0,
                  note : ''
              }],
              financing : [{
                  label : 'Payment of Finance Lease Liabilities',
                  value : 0,
                  note : ''
              },{
                  label : 'Repayment of Borrowings',
                  value : 0,
                  note : ''
              },{
                  label : 'Dividends Paid',
                  value : 0,
                  note : ''
              },{
                  label : 'Dividends Paid',
                  value : 0,
                  note : ''
              }]
          }
          
          $rootScope.financialStatement.cashFlow = scope.cashflow;
      }
    };
  });
  
  /*
  
Cash flows from financing activities
Payment of finance lease liabilities (19,884) (18,423)
Repayment of borrowings (100,000) –
Dividends paid (150,000) (100,000)
Net cash used in financing activities (269,884) (118,423)
Net increase (decrease) in cash and cash equivalents 38,532 (91,475)
Cash and cash equivalents at beginning of year (93,432) (1,957)
Cash and cash equivalents at end of year
*/