import React, { useState } from "react";
import formatNaira from "format-to-naira";
import { Link } from "react-router-dom";
import Holder from "../../components/Holder/Holder";
import menShoes from "../../assets/data/men/menShoes";
import Table from "../../components/Table/Table";
import NoItem from "../../components/NoItem/NoItem";
import "./Cart.scss";

function Cart() {
  const [disable, setDisable] = useState(true);

  let tot = 0;
  menShoes.forEach((element) => {
    tot += Number(element.price.replace(/\D/g, ""));
  });

  if (!menShoes.length) {
    setDisable(true);
  }

  console.log(formatNaira(tot));
  return (
    <Holder>
      {disable ? (
        <NoItem container="cart" />
      ) : (
        <NoItem>
          {" "}
          <h3>My Order</h3>
          <div className="cart-content">
            <div>
              <Table products={menShoes} />
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
        </NoItem>
      )}
    </Holder>
  );
}

export default Cart;
