import React, { useState, useEffect } from "react";
import "./CSS/Profile.css";
import background from "./PRODUCTS/BG/CART.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const navI = useNavigate();
  const Email = localStorage.getItem("Email");
  const Username = localStorage.getItem("Username");
  const Password = localStorage.getItem("Password");
  const Gender = localStorage.getItem("Gender");
  const WishList = JSON.parse(localStorage.getItem("WishList"));

  useEffect(() => {
    if (Email === null)
      return navI("/SignInUp", { state: { goto: "/Profile" } });
  }, []);

  const handleLogout = () => {
    localStorage.setItem("Reset", true);
    localStorage.removeItem("Email");
    localStorage.removeItem("Gender");
    localStorage.removeItem("Password");
    localStorage.removeItem("Username");
    localStorage.removeItem("WishList");

    setTimeout(() => {
      navI("/");
    }, 1000);
  };

  return (
    <div className="MyCart">
      <div
        className="ProdBanner"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="frontBanner">
          <span style={{ fontSize: "15px" }}>{Username}</span>
          <div>Password: {Password}</div>

          <iframe name="votar" style={{ display: "none" }} />
          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbwZus1IjrYAgfiHYTnEOTF-fVHTu-ccPF2yRLsaxrSb4COWLH58tPxVWd0aDgAXWcyH_w/exec"
            autoComplete="off"
            target="votar"
          >
            <div style={{ display: "none" }}>
              <input type="text" name="WishList" value={WishList.join(",")} />
              <input type="text" name="Email" value={Email} />
              <input type="text" name="Password" value={Password} />
              <input type="text" name="Username" value={Username} />
              <input type="text" name="Gender" value={Gender} />
            </div>

            <button
              type={Username == "Admin" ? "button" : "submit"}
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
