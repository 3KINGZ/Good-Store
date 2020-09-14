import React from "react";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import "./ProductContainer.scss";

function ProductContainer({ title, data }) {
  return (
    <>
      <div className="product-container">
        <h3>{title}</h3>
        <div className="main-product-container">
          {data.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductContainer;
