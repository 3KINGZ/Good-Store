import React from "react";
import Section from "../Section/Section";
import MenShoes from "../../assets/images/sections/men-shoes.jpg";
import womenShoes from "../../assets/images/sections/women-shoes.jpg";
import menClothes from "../../assets/images/sections/men-clothes.jpg";
import womenClothes from "../../assets/images/sections/women-clothes.jpg";
import "./SectionContainer.scss";

function SectionContainer() {
  return (
    <div className="section-container">
      <Section backgroundImg={MenShoes} title="SHOES" />
      <Section backgroundImg={womenShoes} title="SHOES" />
      <Section backgroundImg={menClothes} title="MEN" />
      <Section backgroundImg={womenClothes} title="WOMEN" />
    </div>
  );
}

export default SectionContainer;
