import React from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";
import womenClothes from "../../assets/data/women/womenClothes";

function WomenClothes() {
  return <ProductContainer title="Women Clothes" data={womenClothes} />;
}

export default WomenClothes;
