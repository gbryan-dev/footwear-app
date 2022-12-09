import React, { useState, useEffect } from "react";
import "../COMPONENT/CSS/Header.css";

const Header = () => {
  const [isActive, setActive] = useState(false);
  if (isActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className={isActive ? "menuconleft openmenu" : "menuconleft"}>
        <div className="menulist">
          <div onClick={() => setActive(false)}>HOME</div>
          <div>ABOUT US</div>
          <div>OUR TEAM</div>
          <div>PRODUCTS</div>
        </div>
      </div>

      <div className="Header" id="navbar">
        <div className="HeaderLogo">
          <img src={require("./CSS/Logo2.png")} />
        </div>

        <div class={isActive ? "menuconcp close" : "menuconcp"}>
          <div class="menu-btn center" onClick={toggleClass}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="cartIcon">
          <a href="MYMOVIES.html">
            <i class="fa-solid fa-cart-shopping"></i>
          </a>
        </div>

        <div class="nav1">
          <a></a>
          <a href="#s2">HOME</a>
          <a href="#s3">ABOUT US</a>
        </div>

        <div class="nav2">
          <a href="#s5" onclick="WhiteCherry()">
            OUR TEAM
          </a>
          <a href="#s4" onclick="opens4sec1();KissTheRain()">
            PRODUCTS
          </a>
          <a></a>
        </div>
      </div>
    </>
  );
};

export default Header;
