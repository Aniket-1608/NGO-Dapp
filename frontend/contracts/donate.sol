//SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract Donate {
    struct Details {
        string full_name;
        uint256 amount;
        string local_address;
        string pan_card;
        string email;
        uint128 phone_number;
    }

    mapping(uint256 => Details) public donateEntries;
    uint256 public entryCount;

    event EntryStored(uint256 indexed entryId, Details hasDonated);

    function storeValues(
        string memory _full_name,
        uint256 _amount,
        string memory _local_address,
        string memory _pan_card,
        string memory _email,
        uint128 _phone_number
    ) public {
        uint256 entryId = entryCount;
        Details memory donation = Details(
            _full_name,
            _amount,
            _local_address,
            _pan_card,
            _email,
            _phone_number
        );
        donateEntries[entryId] = donation;
        entryCount++;
        emit EntryStored(entryId, donation);
    }

    function getValues(
        uint256 _entryId
    )
        public
        view
        returns (
            string memory,
            uint256,
            string memory,
            string memory,
            string memory,
            uint128
        )
    {
        return (
            donateEntries[_entryId].full_name,
            donateEntries[_entryId].amount,
            donateEntries[_entryId].local_address,
            donateEntries[_entryId].pan_card,
            donateEntries[_entryId].email,
            donateEntries[_entryId].phone_number
        );
    }
}
