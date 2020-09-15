import React from "react";
import "./GoBackNav.scss";

function GoBackNav({ nav, goBack }) {
  return (
    <div className="go-back-nav" onClick={goBack}>{`Go back to ${nav}`}</div>
  );
}

export default GoBackNav;
