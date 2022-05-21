import React from "react";
import FlightDestination from "../flight-destination/FlightDestination";
import "./TicketCart.styles.scss";
import S7logo from "../../assets/S7logo.png";
import LowPriceTag from "../low-price-tag/LowPriceTag";

function TicketCart({ ticket, lowestPrice }) {
  console.log("Lowest Price", lowestPrice);
  return (
    <div className="ticket-container">
      {/* {lowestPrice === true && <LowPriceTag title="самый дешевый" />} */}
      {/* {ticket.segments[0].stops.length === 0 && (
        <LowPriceTag title="прямой рейс" />
      )} */}
      <div className="ticket-header">
        <span>{ticket.price} P</span>
        <img src={S7logo} alt="Airline" />
      </div>
      <div className="flight-direction">
        {ticket.segments.map((segment, ind) => (
          <FlightDestination key={ind} ticketInfo={segment} />
        ))}
      </div>
    </div>
  );
}

export default TicketCart;
