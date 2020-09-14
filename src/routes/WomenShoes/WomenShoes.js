import React from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";
import womenShoes from "../../assets/data/women/womenShoes";

const WomenShoes = () => {
  return <ProductContainer title="Women Shoes" data={womenShoes} />;
};

export default WomenShoes;
