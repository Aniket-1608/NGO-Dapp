//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2<0.9.0;
contract Contract{
    struct Details{
        string name;
        uint phone_number;
        string email;
        string general_inquiry;
        string technical_support;
        string billing_issue;
        string feedback;
    }
    
    Details public details;
    
    function storeValues(string memory _name , uint phone_number , string memory _email , string memory general_inquiry , string memory technical_support , string memory billing_issue , string memory feedback) public {
        details = Details(_name , phone_number , _email , general_inquiry , technical_support , billing_issue , feedback);
    }
    

    function getValues() public view returns (string memory , uint256 , string memory , string memory , string memory , string memory , string memory){
        return (details.name , details.phone_number , details.email , details.general_inquiry , details.technical_support , details.billing_issue , details.feedback);
    }
}
