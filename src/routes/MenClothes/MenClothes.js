import React from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";
import menClothes from "../../assets/data/men/menClothes";

const MenClothes = () => {
  return <ProductContainer title="Men Clothes" data={menClothes} />;
};

export default MenClothes;
