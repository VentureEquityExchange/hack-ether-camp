contract DirectedBy {
    struct Director {
        string name;
        address account;
        bytes32 role;
    }
    
    mapping(address => Director) public directors;
    event directorAdded(string _n, address _a, bytes32 _r);
    
    function DirectedBy(string _name, bytes32 _role) {
        directors[msg.sender].name = _name;
        directors[msg.sender].account = msg.sender;
        directors[msg.sender].role = _role;
    }
    
    function addDirector(string _name, address _account, bytes32 _role) isDirector {
        directors[_account].name = _name;
        directors[_account].account = _account;
        directors[_account].role = _role;
        directorAdded(_name, _account, _role);
    }
    
    modifier isDirector { if (directors[msg.sender].account != 0x0) _ }
    modifier isComptroller { if (directors[msg.sender].role == "comptroller") _ }
}