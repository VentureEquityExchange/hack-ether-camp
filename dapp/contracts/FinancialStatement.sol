import "DirectedBy.sol";

contract FinancialStatement is DirectedBy("Ryan", "comptroller"){
    struct Period {
        uint year;
        uint month;
    }
    
    struct Item {
        Period period;
        string item;
        uint amount;
        string denomination;
        string notes;
    }
    
    struct Statement {
        string report;
        Item [] items;
        address comptroller;
        uint dated;
    }
    
    uint [] public Dates;
    
    struct Report {
        string statement;
        uint created;
    }
    
    Report [] public Reports;
    
    mapping(uint => Statement) public Statements;
    event NewStatement(uint date, string _r, string _i, address _c);
    
    function newStatement(string _report, uint _year, uint _month, string _item, uint _amount, string _denomination, string _notes) isComptroller {
        uint dated = now; // block.timestamp
        Dates.push(dated);
        Reports.push(Report({statement : _report, created : dated}));
        
        NewStatement(dated, _report, _item, msg.sender);
        
        Statements[dated].report = _report;
        Statements[dated].items.push(Item({period : Period({year : _year, month : _month}), item : _item, amount : _amount, denomination : _denomination, notes : _notes}));
        Statements[dated].comptroller = msg.sender;
        Statements[dated].dated = dated;
        
    }
    
    // Not implemented yet;
    // function getItem(uint _statement) public returns (uint y, uint m, string i, uint a, string d, string n){
    //     Statement s = Statements[_statement];
    // }
    
}