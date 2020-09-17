import React, { useState } from "react";
import { Link } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Title from "../Title/Title";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import heart from "../../assets/icons/heart.svg";
import "./Header.scss";

function Header() {
  const [change, setChange] = useState(false);
  let position = useWindowScrollPosition();

  if (position.y > 20 && !change) {
    setChange(true);
  }

  if (position.y <= 20 && change) {
    setChange(false);
  }

  return (
    <div className={`header ${change ? "navbar-scroll" : null}`}>
      <Link to="/wishlist">
        <div>
          <img src={heart} alt="search" width={20} className="im" />
          <sup className="qty">5</sup>
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
          <sup className="qty">6</sup>
        </div>
      </Link>
    </div>
  );
}

export default Header;
