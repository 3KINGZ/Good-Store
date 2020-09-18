import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import store from "../../assets/data/general/general";
import GoBackNav from "../../components/GoBackNav/GoBackNav";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import { ClothSelect } from "../../components/Select/Select";
import { ShoeSelect } from "../../components/Select/Select";
import QtySelector from "../../components/QtySelector/QtySelector";
import { addToCart } from "../../redux/cart/cartActions";
import { addToWishList } from "../../redux/wishList/wishListActions";
import formatNaira from "format-to-naira";
import "./ItemDetail.scss";

function ItemDetail(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
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

  const onAdd = () => {
    if (quantity < 100) {
      setQuantity((quantity) => quantity + 1);
    }
  };

  const onSub = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const rePrice = product.price;
  let price;
  if (rePrice) {
    price = rePrice.replace(/[^0-9]/g, "");
    price = price * quantity;
    console.log(price);
  } else {
    console.log("no product");
  }

  const item = {
    id: product.id,
    image: product.image,
    title: product.title,
    quantity: quantity,
    price: formatNaira(price),
  };

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
          <QtySelector val={quantity} sub={onSub} add={onAdd} />
          <div
            className="add-wishlist"
            onClick={() => dispatch(addToWishList(item))}
          >
            Add to wishList
          </div>
          <div className="add-cart" onClick={() => dispatch(addToCart(item))}>
            Add to Cart
          </div>
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
