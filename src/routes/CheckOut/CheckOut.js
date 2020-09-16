import React from "react";
import Holder from "../../components/Holder/Holder";
import "./CheckOut.scss";

function CheckOut() {
  return (
    <Holder>
      <div className="checkout">
        <h2>Payment Details</h2>
        <div>
          <div>
            <label>Name on Card</label> <br />
            <input type="text" className="other-input" />
          </div>
          <div>
            <label>Card Number</label> <br />
            <input type="text" className="other-input" />
          </div>
          <div className="special-input">
            <div>
              <label>Expiration</label> <br />
              <br />
              <input type="text" className="expiration" />
              <span> / </span>
              <input type="text" className="expiration" />
            </div>
            <div>
              <label>CVC</label> <br />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <button className="final-pay">Pay</button>
    </Holder>
  );
}

export default CheckOut;
