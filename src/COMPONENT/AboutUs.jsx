import React from "react";
import pair1 from "../IMAGES/BANNER/Pair1.png";
import pair2 from "../IMAGES/BANNER/Pair2.png";
import pair3 from "../IMAGES/BANNER/MorePair.png";
import "./CSS/About.css";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="text">About Us</div>

      <div className="aboutflex">
        <div className="aboutleft">
          <div className="aboutleftimg">
            <img src={require("./CSS/forAbout.png")} />
            <img src={require("./CSS/Aboutbg.png")} />
          </div>
        </div>
        <div className="aboutright">
          <div id="aboutr2">
            At G2 Footwear, we are passionate about providing high-quality,
            stylish shoes for our customers. We believe that everyone deserves
            to have a great pair of shoes that fits their unique style and
            needs. That's why we offer a wide range of shoes for men, women, and
            children, in a variety of sizes and styles.
          </div>

          <div>
            Our team is dedicated to providing exceptional customer service and
            helping our customers find the perfect pair of shoes. We carefully
            curate our selection to include only the best brands and the latest
            styles, so you can trust that you're getting the best when you shop
            with us.
          </div>

          <div id="aboutr3">
            Thank you for choosing G2 Footwear. We look forward to helping you
            find the perfect pair of shoes!
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
