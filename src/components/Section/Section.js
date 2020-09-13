import React from "react";
import "./Section.scss";

function Section({ backgroundImg, title }) {
  return (
    <div
      className="section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="content">
        <h2>{title}</h2>
        <div>
          <span>shop now</span>
        </div>
      </div>
    </div>
  );
}

export default Section;
