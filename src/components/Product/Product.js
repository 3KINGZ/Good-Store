import React from "react";
import { Link } from "react-router-dom";
import "./Product.scss";

function Product({ data }) {
  return (
    <Link to="/item/:id">
      <div className="product">
        <img src={data.image} alt={data.title} className="product-image" />
        <div className="title">{data.title}</div>
        <div>{data.price}</div>
        <div className="action-link">View Item</div>
      </div>
    </Link>
  );
}

export default Product;
