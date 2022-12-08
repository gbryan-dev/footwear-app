import React from "react";
import "../App.css";
import cat1 from "../IMAGES/CATEGORIES/FLATS.png";
import cat2 from "../IMAGES/CATEGORIES/FORMEN.png";
import cat3 from "../IMAGES/CATEGORIES/FORWOMEN.png";
import cat4 from "../IMAGES/CATEGORIES/FORBABY.png";
import cat5 from "../IMAGES/CATEGORIES/FORKIDS.png";
import cat6 from "../IMAGES/CATEGORIES/LEATHER.png";

const Categories = () => {
  const imgs = [
    { img: cat2, for: "FOR\xA0MEN" },
    { img: cat5, for: "FOR\xA0KIDS" },
    { img: cat3, for: "FOR\xA0WOMEN" },
    { img: cat4, for: "FOR\xA0BABIES" },
    { img: cat6, for: "LEATHERS" },
    { img: cat1, for: "FLATS" },
  ];

  return (
    <>
      <section className="categories">
        {/* <img src={require("../IMAGES/Banner.png")} /> */}
        <div className="text">CATEGORIES</div>
      </section>

      <section className="itemFlex">
        {imgs.map((cat, index) => (
          <div className="itemCon" key={index}>
            <img src={cat.img} alt="" />
            <button>
              <i className="fa-solid fa-eye"></i> {cat.for}
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Categories;
