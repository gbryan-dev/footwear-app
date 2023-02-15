import React, { useState, useEffect } from "react";
import "../COMPONENT/CSS/Header.css";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navI = useNavigate();

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
    setActive(false);
  };

  const [getEmailLocal, setEmaiLocal] = useState(localStorage.getItem("Email"));
  const [getGender, setGender] = useState(localStorage.getItem("Gender"));

  useEffect(() => {
    setEmaiLocal(localStorage.getItem("Email"));
    setGender(localStorage.getItem("Gender"));

    if (getEmailLocal === "g2@admin.com") navI("/Profile");
  }, [location]);

  return (
    <>
      <div className={isActive ? "menuconleft openmenu" : "menuconleft"}>
        <div className="menulist">
          <div>
            <Link onClick={gotoTop} to="/">
              HOME
            </Link>
          </div>
          <div>
            <Link onClick={gotoTop} to="/about">
              ABOUT US
            </Link>
          </div>
          <div>
            <Link onClick={gotoTop} to="/Products">
              PRODUCTS
            </Link>
          </div>
          <div>
            <Link
              onClick={gotoTop}
              state={{ goto: "/Profile", getEmailLocal }}
              to={getEmailLocal === null ? "/SignInUp" : "/Profile"}
            >
              PROFILE
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
          <Link to={getEmailLocal === null ? "/SignInUp" : "/Profile"}>
            <i class="fa-solid fa-cart-shopping"></i>
          </Link>
        </div>

        <div class="nav1">
          <a></a>
          <Link onClick={gotoTop} to="/">
            HOME
          </Link>
          <Link onClick={gotoTop} to="/about">
            ABOUT US
          </Link>
        </div>

        <div class="nav2">
          <Link onClick={gotoTop} to="/Products">
            PRODUCTS
          </Link>

          <Link
            onClick={gotoTop}
            state={{ goto: "/Profile", getEmailLocal }}
            to={getEmailLocal === null ? "/SignInUp" : "/Profile"}
          >
            PROFILE
          </Link>
          <a></a>
        </div>
      </div>
    </>
  );
};

export default Header;
