import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Title from "../Title/Title";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import heart from "../../assets/icons/heart.svg";
import "./Header.scss";

function Header() {
  const cart = useSelector((state) => state.cart.totalItems);
  const wishList = useSelector((state) => state.wishList.totalItems);
  const [change, setChange] = useState(false);
  const position = useWindowScrollPosition();

  if (position.y > 20 && !change) {
    setChange(true);
  }

  if (position.y <= 20 && change) {
    setChange(false);
  }
  // useEffect(() => {
  //   if (position.y > 20 && !change) {
  //     setChange(true);
  //   }
  //   if (position.y <= 20 && change) {
  //     setChange(false);
  //   }
  //   //eslint-disable-next-line
  // }, [position]);

  return (
    <div className={`header ${change ? "navbar-scroll" : null}`}>
      <Link to="/wishlist">
        <div>
          <img src={heart} alt="search" width={20} className="im" />
          <sup className="qty">{wishList}</sup>
        </div>
      </Link>
      <Link to="/">
        <div className="title-container">
          <Title />
        </div>
      </Link>
      <Link to="/cart">
        <div>
          <img src={shoppingBag} alt="shopping bag" width={20} className="im" />
          <sup className="qty">{cart}</sup>
        </div>
      </Link>
    </div>
  );
}

export default Header;
