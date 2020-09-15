import React, { useState, useEffect } from "react";
import store from "../../assets/data/general/general";
import GoBackNav from "../../components/GoBackNav/GoBackNav";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import { ClothSelect } from "../../components/Select/Select";
import { ShoeSelect } from "../../components/Select/Select";
import "./ItemDetail.scss";

function ItemDetail(props) {
  console.log(props);
  const [product, setProduct] = useState({});

  const [products] = useState(store);

  useEffect(
    () => {
      check();
    },
    // eslint-disable-next-line
    []
  );

  function check() {
    const found = products.find(
      (product) => product.id === Number(props.match.params.id)
    );
    setProduct(found);
  }

  return (
    <>
      <div className="item-detail">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="product-image-desc"
          />
        </div>
        <div className="second-div">
          <div>
            <h2>{product.title}</h2>
          </div>
          <div>
            <p>{product.price}</p>
          </div>
          <div>
            {product.type === "cloth" ? <ClothSelect /> : <ShoeSelect />}
          </div>
          <div className="add-cart">Add to Cart</div>
        </div>
      </div>
      <div className="product-description">
        <h3>PRODUCT DESCRIPTION</h3>
        {product.description}
        <GoBackNav nav={product.type} goBack={() => props.history.goBack()} />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
}

export default ItemDetail;