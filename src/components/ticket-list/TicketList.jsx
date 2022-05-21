import React from "react";
import "./TicketList.styles.scss";
import TicketCart from "../ticket-cart/TicketCart";
import PriceSpeedSort from "./../sort-search/PriceSpeedSort";
import { useSelector } from "react-redux";

function TicketList() {
  const { sortedTickets, tickets } = useSelector((state) => state.tickets);
  let ticketsList = null;
  sortedTickets.length > 0
    ? (ticketsList = sortedTickets)
    : (ticketsList = tickets.sort((a, b) => a.price - b.price));

  console.log("TICKETS FROM TICKETSLIST:", ticketsList);
  return (
    <div className="ticket-list-container">
      <PriceSpeedSort />
      {ticketsList.map((item, ind) =>
        ind === 0 ? (
          <TicketCart key={ind} ticket={item} lowestPrice={true} />
        ) : (
          <TicketCart key={ind} ticket={item} lowestPrice={false} />
        )
      )}
    </div>
  );
}

export default TicketList;
