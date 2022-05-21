import React from "react";
import "./LowPriceTag.styles.scss";

function LowPriceTag({ title }) {
  return (
    <>
      <p className="low-price-tag">{title}</p>
    </>
  );
}

export default LowPriceTag;
