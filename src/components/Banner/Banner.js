import React from "react";
import BannerImg from "../../assets/images/landing-page/yellow.jpg";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="img-container">
        <img src={BannerImg} alt="girl on jacket" width="220px" />
      </div>
      <div className="season">
        WINTER <br /> SALE
      </div>
      <div className="discount">
        UP TO <br /> 65% <br /> OFF
      </div>
    </div>
  );
}

export default Banner;
