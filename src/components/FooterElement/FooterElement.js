import React from "react";
import "./FooterElement.scss";

function FooterElement({ title, elements }) {
  return (
    <div className="footer-element">
      <h3>{title}</h3>
      <ul>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterElement;
