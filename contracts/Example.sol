// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Simple example contract for Base Network
contract Example {
    // Stored message
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    // Update stored message
    function setMessage(string memory _message) external {
        message = _message;
    }
}
