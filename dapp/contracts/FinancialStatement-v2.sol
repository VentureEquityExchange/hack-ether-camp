contract FinancialStatement is IncomeStatement("ETH") {
    function ReportRevenue(string _note) returns (bool){
        this.send(msg.value);
        return submitRevenue(msg.value, _note);
    }
    
    funct
}


contract Venture is FinancialStatement {
    
}