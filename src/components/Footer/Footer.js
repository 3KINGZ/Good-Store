import React from "react";
import Title from "../Title/Title";
import FooterElement from "../FooterElement/FooterElement";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div>
          <Title />
          <p>
            In minim proident Lorem duis sunt sint velit nostrud fugiat.
            Cupidatat duis veniam nisi minim incididunt nisi id adipisicing elit
            proident enim sit sit laboris. Ea elit tempor laboris id veniam.
            Enim qui culpa id veniam ad. Do occaecat incididunt fugiat quis.
            Veniam labore qui sit sit pariatur cillum ex proident enim.
          </p>
        </div>
        <>
          <FooterElement
            title="Company"
            elements={["Abouts", "Products", "Purchase", "Code of Conduct"]}
          />
        </>
        <>
          <FooterElement
            title="Help"
            elements={[
              "Where is my order",
              "Contact us",
              "Shipping fee",
              "Refund terms",
            ]}
          />
        </>
      </div>
    </div>
  );
}

export default Footer;
