import React, { useState } from "react";
import "./PRODUCTS/Products.css";

const Products = () => {
  const [isActive, setIsActive] = useState("ALL");

  const handleActive = (x) => {
    setIsActive(x);
  };

  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  const filtBtn = [
    { val: "ALL" },
    { val: "FEATURED" },
    { val: "NEW COLLECTION" },
    { val: "FOR MEN" },
    { val: "FOR WOMEN" },
    { val: "FOR KIDS" },
    { val: "FOR BABIES" },
    { val: "LEATHERS" },
  ];

  return (
    <div className="ProductSection">
      <div className="ProdBanner">
        <div className="frontBanner">
          <span>G2 FOOTWEAR</span>
          <div>
            Shop Now Upto <b style={{ color: "#31ff66" }}>50%</b> Off!
          </div>
        </div>
      </div>

      <div className="filter">
        <input
          type="text"
          placeholder="Search Here..."
          spellCheck="false"
          onChange={handleInput}
        />
        <div className="filterflex">
          {filtBtn.map((filt, index) => (
            <div
              key={index}
              className={isActive == filt.val ? "active" : "button"}
              onClick={() => handleActive(filt.val)}
            >
              {filt.val}
            </div>
          ))}
        </div>
      </div>

      <div className="searchFor">
        {inputVal.length >= 1 ? <h1>Search for: {inputVal}</h1> : ""}
      </div>
    </div>
  );
};

export default Products;
