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
  // position == { x: 0, y: 0 }

  if (position.y > 20 && !change) {
    setChange(true);
  }

  if (position.y <= 20 && change) {
    setChange(false);
  }

  return (
    <Link to="/">
      <div className={`header ${change ? "navbar-scroll" : null}`}>
        <div>
          <img src={heart} alt="search" width={20} className="im" />
          <sup className="qty">5</sup>
        </div>
        <div className="title-container">
          <Title />
        </div>
        <div>
          <img src={shoppingBag} alt="shopping bag" width={20} className="im" />
          <sup className="qty">6</sup>
        </div>
      </div>
    </Link>
  );
}

export default Header;
