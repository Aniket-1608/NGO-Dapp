// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    address public owner;

    constructor() ERC20("EthToken", "sETH") {
        owner = msg.sender;
        _mint(owner, 70000000 * (10 ** decimals()));
    }

    function setOwner(address newOwner) external {
        require(msg.sender == owner, "Only the owner can call this function");
        owner = newOwner;
    }

    function mint(address account, uint256 amount) external {
        require(msg.sender == owner, "Only the owner can call this function");
        _mint(account, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}
