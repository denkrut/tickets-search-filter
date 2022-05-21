import React from "react";
import "./FlightDestination.styles.scss";

function FlightDestination({ ticketInfo }) {
  const { duration, stops, destination, origin, departue, arrival } =
    ticketInfo;
  //   console.log(stops);
  return (
    <div className="flight-destination-container">
      <div className="one">
        <h4>
          {origin}-{destination}
        </h4>
        <p>
          {departue} - {arrival}
        </p>
      </div>
      <div className="one">
        <h4>В ПУТИ</h4>
        <p>{duration}</p>
      </div>
      <div className="one">
        <h4>
          {stops.length ? `${stops.length} Пересадка(и)` : "Без пересадок"}{" "}
        </h4>
        <p>{stops.join(",")}</p>
      </div>
    </div>
  );
}

export default FlightDestination;
