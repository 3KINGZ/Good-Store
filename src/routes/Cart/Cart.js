import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../../redux/cart/cartActions";
import formatNaira from "format-to-naira";
import Holder from "../../components/Holder/Holder";
import menShoes from "../../assets/data/men/menShoes";
import Table from "../../components/Table/Table";
import NoItem from "../../components/NoItem/NoItem";
import "./Cart.scss";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  // const [disable, setDisable] = useState(false);
  // const cart = menShoes;

  // if (cart.length === 0) {
  //   setDisable(true);
  // }

  let tot = 0;

  if (cart.length) {
    cart.forEach((element) => {
      tot += Number(element.price.replace(/\D/g, ""));
    });
  }

  return (
    <Holder>
      {cart.length === 0 ? (
        <NoItem container="cart" />
      ) : (
        <>
          <h3>My Order</h3>
          <div className="cart-content">
            <div>
              <Table products={cart} onDelete={deleteFromCart} />
            </div>
            <div className="order-summary">
              <div>
                <h3>Order Summary</h3>
              </div>
              <div className="order-row">
                <div className="price-summary wide">
                  <div>{menShoes.length} Product(s)</div>
                  <div>{formatNaira(tot)}</div>
                </div>
                <div className="wide">
                  <div>Shipping</div>
                  <div>{formatNaira(500)}</div>
                </div>
              </div>
              <div className="order-row wide">
                <div>Total</div>
                <div>{formatNaira(tot, 500)}</div>
              </div>
              <Link to="/checkout">
                <button className="checkout-btn">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </Holder>
  );
}

export default Cart;
