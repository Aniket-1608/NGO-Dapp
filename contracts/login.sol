// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Login {
    struct User {
        bytes32 username;
        bytes32 password;
        bool exists;
    }

    mapping(address => User) private users;

    event UserRegistered(address userAddress, string username);
    event UserAuthenticate(address userAddress, bool isAuthenticate);

    function registerUser(
        string memory _username,
        string memory _password
    ) external {
        require(!users[msg.sender].exists, "User already exists");
        bytes32 userName = keccak256(abi.encodePacked(_username));
        bytes32 password = keccak256(abi.encodePacked(_password));
        users[msg.sender] = User(userName, password, true);
        emit UserRegistered(msg.sender, _username);
    }

    function userExists() external view returns (bool) {
        User memory user1 = users[msg.sender];
        return user1.exists;
    }

    function authenticateUser(
        string memory _username,
        string memory _password
    ) external {
        User memory user1 = users[msg.sender];
        bool isauthenticate = ((user1.exists) &&
            (user1.username == keccak256(abi.encodePacked(_username))) &&
            (user1.password == keccak256(abi.encodePacked(_password))));
        emit UserAuthenticate(msg.sender, isauthenticate);
    }
}
