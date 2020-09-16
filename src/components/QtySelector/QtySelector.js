import React from "react";
import "./QtySelector.scss";

function QtySelector({ val, sub, add }) {
  return (
    <div className="qty-selector">
      <button onClick={sub}>-</button>
      <div className="qty-value">{val}</div>
      <button onClick={add}>+</button>
    </div>
  );
}

export default QtySelector;
