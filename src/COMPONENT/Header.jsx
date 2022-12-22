import React, { useState, useRef } from "react";
import "../COMPONENT/CSS/Header.css";
import { Link } from "react-router-dom";

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

  const gotoTop = () => {
    topRef.current.scrollIntoView();
    setActive(false);
  };

  const topRef = useRef();

  return (
    <>
      <div ref={topRef}></div>
      <div className={isActive ? "menuconleft openmenu" : "menuconleft"}>
        <div className="menulist">
          <div>
            <Link to="/" onClick={gotoTop}>
              HOME
            </Link>
          </div>
          <div>
            <Link to="/about" onClick={gotoTop}>
              ABOUT US
            </Link>
          </div>
          <div>
            <Link to="/Products" onClick={gotoTop}>
              CONTACT US
            </Link>
          </div>
          <div>
            <Link to="/Products" onClick={gotoTop}>
              PRODUCTS
            </Link>
          </div>
        </div>
      </div>

      <div className="Header" id="navbar">
        <div className="HeaderLogo">
          <img src={require("./IMAGES/Logo2.png")} />
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
          <Link to="/" onClick={gotoTop}>
            HOME
          </Link>
          <Link to="/about" onClick={gotoTop}>
            ABOUT US
          </Link>
        </div>

        <div class="nav2">
          <Link to="/Products" onClick={gotoTop}>
            ABOUT US
          </Link>

          <Link to="/Products" onClick={gotoTop}>
            SHOPPING CART
          </Link>
          <a></a>
        </div>
      </div>
    </>
  );
};

export default Header;
