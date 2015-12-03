import "DirectedBy.sol";
import "FinancialStatement.sol";

contract Venture is DirectedBy("Ryan", "comptroller", 50), FinancialStatement{
    uint public x;
    
    function set(uint value) isDirector {
        x = value;
    }
}