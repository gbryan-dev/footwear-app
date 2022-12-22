import React from "react";

import "./CSS/About.css";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div className="about">
      <div className="text">About Us</div>
      <div className="aboutflex">
        <div className="aboutleft">
          <div className="aboutleftimg">
            <img src={require("./IMAGES/forAbout.png")} />
            <img src={require("./IMAGES/Aboutbg.png")} />
          </div>
        </div>
        <div className="aboutright">
          <div>
            At G2 Footwear, we are passionate about providing high-quality,
            stylish footwear for our customers. We believe that everyone
            deserves to have a great pair of footwear that fits their unique
            style and needs. That's why we offer a wide range of footwear for
            men, women, and children, in a variety of sizes and styles.
          </div>

          <div id="aboutr2">
            Our team is dedicated to providing exceptional customer service and
            helping our customers find the perfect pair of footwear. We
            carefully curate our selection to include only the best brands and
            the latest styles, so you can trust that you're getting the best
            when you shop with us.
          </div>

          <div id="aboutr3">
            Thank you for choosing G2 Footwear. We look forward to helping you
            find the perfect pair of footwear!
          </div>
        </div>
      </div>

      <Team />
    </div>
  );
};

export default AboutUs;
