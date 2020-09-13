import React from "react";
import Title from "../Title/Title";
import search from "../../assets/icons/search (1).svg";
import shoppingBag from "../../assets/icons/shopping-bag.svg";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div>
        <img src={search} alt="search" width={20} className="im" />
      </div>
      <div className="title-container">
        <Title />
      </div>
      <div>
        <img src={shoppingBag} alt="shopping bag" width={20} className="im" />
      </div>
    </div>
  );
}

export default Header;
