import React, { useState } from "react";
import "./PriceSpeedSort.styles.scss";
import { useDispatch } from "react-redux";

function PriceSpeedSort() {
  const dispatch = useDispatch();
  const [isActive, setActive] = useState(true);

  const handleClick = (e) => {
    // const { name } = e.target;
    console.log("DISPATCHED", e);
    setActive(!isActive);
    dispatch({ type: e });
  };

  return (
    <div className="price-speed-sort-container">
      <div
        className={isActive ? ["left", "-active"].join("") : "left"}
        name="SORT_BY_PRICE"
        onClick={() => handleClick("SORT_BY_PRICE")}
      >
        Самый дешевый
      </div>
      <hr></hr>
      <div
        className={!isActive ? ["right", "-active"].join("") : "right"}
        name="SORT_BY_SPEED"
        onClick={() => handleClick("SORT_BY_SPEED")}
      >
        Самый быстрый
      </div>
    </div>
  );
}

export default PriceSpeedSort;
