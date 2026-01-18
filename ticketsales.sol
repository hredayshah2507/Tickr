// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TicketSystem {
    address public owner;
    uint256 public ticketPrice;
    uint256 public ticketsSold;
    uint256 public maxTickets;

    uint256 public ticketCount;

    mapping(uint256 => address) public ticketOwner;

    bool private locked;

    event TicketPurchased(address buyer, uint256 ticketId, uint256 amountPaid);

    modifier noReentrancy() {
        require(!locked, "No reentrancy");
        locked = true;
        _;
        locked = false;
    }

    constructor(uint256 _ticketPrice, uint256 _maxTickets) {
        owner = msg.sender;
        ticketPrice = _ticketPrice;
        maxTickets = _maxTickets;
    }

    function buyTicket() external payable noReentrancy {
        require(msg.value == ticketPrice, "Incorrect ETH amount");
        require(ticketsSold < maxTickets, "Event sold out");

        ticketCount++;
        uint256 newTicketId = ticketCount;

        ticketOwner[newTicketId] = msg.sender;

        ticketsSold++;

        emit TicketPurchased(msg.sender, newTicketId, msg.value);
    }

    function withdraw() external noReentrancy {
    require(msg.sender == owner, "Not owner");
    (bool success, ) = payable(owner).call{value: address(this).balance}("");
    require(success, "Transfer failed");
}
}


