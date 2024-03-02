//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract Contact {
    enum Subject {
        GENERAL_INQUIRY,
        TECHNICAL_SUPPORT,
        BILLING_ISSUE
    }

    struct Details {
        string name;
        uint128 phone_number;
        string email;
        Subject _subject;
        string feedback;
    }

    mapping(uint256 => Details) public contactEntries;
    uint256 public entryCount;

    event EntryStored(uint256 indexed entryId);

    function storeValues(
        string memory _name,
        uint128 _phone_number,
        string memory _email,
        Subject _subject,
        string memory _feedback
    ) public {
        uint256 entryId = entryCount;
        contactEntries[entryId] = Details(
            _name,
            _phone_number,
            _email,
            _subject,
            _feedback
        );
        entryCount++;
        emit EntryStored(entryId);
    }

    function getValues(
        uint256 _entryId
    )
        public
        view
        returns (string memory, uint128, string memory, Subject, string memory)
    {
        return (
            contactEntries[_entryId].name,
            contactEntries[_entryId].phone_number,
            contactEntries[_entryId].email,
            contactEntries[_entryId]._subject,
            contactEntries[_entryId].feedback
        );
    }
}
