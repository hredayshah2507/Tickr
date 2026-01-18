// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleTicketSystem {

    struct Ticket {
        address buyer;      
        bool isActive;      
        bool isReturned;    
    }

    uint public pricePerTicket; 
    uint public maxTickets;      
    address public contractOwner;

    mapping(uint => Ticket) public allTickets;
    uint public nextTicketId = 1;  

    uint public returnedTicketCount;

    event TicketPurchased(uint ticketId, address buyer);
    event TicketReturned(uint ticketId, address buyer);
    event TicketReissued(uint ticketId, address newBuyer);

    constructor(uint _price, uint _maxTickets) {
        pricePerTicket = _price;
        maxTickets = _maxTickets;
        contractOwner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == contractOwner, "Only owner can do this");
        _;
    }

    function purchaseTicket() external payable {
        require(nextTicketId <= maxTickets, "No tickets left");

        require(msg.value == pricePerTicket, "Please send exact amount");

        uint newTicketId = nextTicketId;
        allTickets[newTicketId] = Ticket({
            buyer: msg.sender,
            isActive: true,
            isReturned: false
        });

        nextTicketId++;

        emit TicketPurchased(newTicketId, msg.sender);
    }

    function returnTicket(uint ticketId) external {
        Ticket storage ticket = allTickets[ticketId];

        require(ticket.buyer == msg.sender, "You don't own this ticket");
        require(ticket.isActive, "Ticket already used or returned");

        ticket.isActive = false;
        ticket.isReturned = true;
        returnedTicketCount++;

        payable(msg.sender).transfer(pricePerTicket);

        emit TicketReturned(ticketId, msg.sender);
    }

    function reissueTicket(uint ticketId, address newBuyer) external onlyOwner {
        Ticket storage ticket = allTickets[ticketId];

        require(ticket.isReturned, "Ticket not returned");
        require(returnedTicketCount > 0, "No returned tickets available");

        ticket.buyer = newBuyer;
        ticket.isActive = true;
        ticket.isReturned = false;
        returnedTicketCount--;

        emit TicketReissued(ticketId, newBuyer);
    }

    function updatePrice(uint newPrice) external onlyOwner {
        pricePerTicket = newPrice;
    }

    function updateMaxTickets(uint newMax) external onlyOwner {
        maxTickets = newMax;
    }

    function withdrawContractBalance() external onlyOwner {
        payable(contractOwner).transfer(address(this).balance);
    }

    function checkTicket(uint ticketId) external view returns (bool) {
        return allTickets[ticketId].isActive;
    }

    function getTicketOwner(uint ticketId) external view returns (address) {
        return allTickets[ticketId].buyer;
    }
}