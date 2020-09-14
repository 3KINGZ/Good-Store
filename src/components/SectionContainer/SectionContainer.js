import React from "react";
import { Link } from "react-router-dom";
import Section from "../Section/Section";
import MenShoes from "../../assets/images/sections/men-shoes.jpg";
import womenShoes from "../../assets/images/sections/women-shoes.jpg";
import menClothes from "../../assets/images/sections/men-clothes.jpg";
import womenClothes from "../../assets/images/sections/women-clothes.jpg";
import "./SectionContainer.scss";

function SectionContainer() {
  return (
    <div className="section-container">
      <Link to="/men-shoes">
        <Section backgroundImg={MenShoes} title="SHOES" />
      </Link>
      <Link to="/women-shoes">
        <Section backgroundImg={womenShoes} title="SHOES" />
      </Link>
      <Link to="/men-clothes">
        <Section backgroundImg={menClothes} title="MEN" />
      </Link>
      <Link to="/women-clothes">
        <Section backgroundImg={womenClothes} title="WOMEN" />
      </Link>
    </div>
  );
}

export default SectionContainer;
