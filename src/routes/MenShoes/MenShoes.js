import React from "react";
import ProductContainer from "../../containers/ProductContainer/ProductContainer";
import menShoes from "../../assets/data/men/menShoes";

const MenShoes = () => {
  return <ProductContainer title="Men Shoes" data={menShoes} />;
};

export default MenShoes;
