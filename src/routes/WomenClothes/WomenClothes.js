import React from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";
import womenClothes from "../../assets/data/women/womenClothes";

const WomenClothes = () => {
  return <ProductContainer title="Women Clothes" data={womenClothes} />;
};

export default WomenClothes;
