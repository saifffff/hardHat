// SPDX-License-Identifier: MIT

pragma solidity >= 0.5.0 < 0.9.0;

contract Token{
    string public tokenName = "Saif's Token"; // name of our token
    string public symbol = "STK"; // symbol of the token
    uint public totalSupply = 100; // total supply

    address public owner; // address of the owner of the token

    mapping(address => uint) balances; // mapping address : balance

    constructor(){
        
        balances[msg.sender] = totalSupply; // initially transferring the total supply to one address
        owner = msg.sender; 
        /* because constructor gets invoked only when the contract is deployed, the person who deploys 
        this is the msg.sender and we will transfer all the token to that account */
    }

    function transfer(address to, uint amount)  external {
        require(balances[msg.sender] >= amount,"Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) view external returns (uint) {
        return balances[account];
    }
}


