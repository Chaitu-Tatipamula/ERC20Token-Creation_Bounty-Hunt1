// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20{

    constructor () ERC20("BountyHuntToken","BHT") {
        // Mining tokens 
        _mint(msg.sender, 999*(10**18));
    }
    // Function to mine the tokens in future
     function mint() public {
        _mint(msg.sender, 999*(10**18));
    }

}