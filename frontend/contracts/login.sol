// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Login {
    struct User {
        string Name;
        uint128 Mobile;
        string Country;
        string City;
        string Email;
        string Address;
        bytes32 UserName;
        bytes32 Password;
        bool exists;
    }

    mapping(address => User) private users;

    event UserRegistered(address userAddress, bool userRegistered);
    event UserAuthenticate(address userAddress, bool isAuthenticate);
    event UserUpdatePassword(address userAddress, bool isupdated);
    event UserExists(address userAddress, bool isExists);

    function registerUser(
        string memory _name,
        uint128 _mobile,
        string memory _country,
        string memory _city,
        string memory _email,
        string memory _address,
        string memory _username,
        string memory _password
    ) external {
        require(!users[msg.sender].exists, "User already exists");
        bytes32 userName = keccak256(abi.encodePacked(_username));
        bytes32 password = keccak256(abi.encodePacked(_password));
        users[msg.sender] = User(
            _name,
            _mobile,
            _country,
            _city,
            _email,
            _address,
            userName,
            password,
            true
        );
        emit UserRegistered(msg.sender, userExists());
    }

    function userExists() public returns (bool) {
        User memory user1 = users[msg.sender];
        emit UserExists(msg.sender, user1.exists);
        return user1.exists;
    }

    function updatePassword(string memory newPassword) external {
        require(users[msg.sender].exists, "User does not exists");
        User memory user1 = users[msg.sender];
        user1.Password = keccak256(abi.encodePacked(newPassword));
        emit UserUpdatePassword(msg.sender, true);
    }

    function authenticateUser(
        string memory _username,
        string memory _password
    ) external {
        User memory user1 = users[msg.sender];
        bool isauthenticate = ((user1.exists) &&
            (user1.UserName == keccak256(abi.encodePacked(_username))) &&
            (user1.Password == keccak256(abi.encodePacked(_password))));
        emit UserAuthenticate(msg.sender, isauthenticate);
    }
}
