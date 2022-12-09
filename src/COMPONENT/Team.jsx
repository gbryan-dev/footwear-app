import React from "react";
import "../COMPONENT/CSS/OurTeam.css";
import VidA from "../IMAGES/Vids/VidA.mp4";
import VidB from "../IMAGES/Vids/VidB.mp4";
import VidC from "../IMAGES/Vids/VidC.mp4";
import VidD from "../IMAGES/Vids/VidD.mp4";

const Team = () => {
  const vids = [
    { vidsrc: VidA, title: "24hr Customer Service" },
    { vidsrc: VidB, title: "High-quality materials" },
    { vidsrc: VidC, title: "Affordable prices" },
    { vidsrc: VidD, title: "Free and fast delivery" },
  ];

  return (
    <div className="ourteam">
      <div className="text">Our Team</div>
      <div className="teamflex">
        <div className="teams">
          <img src={require("../IMAGES/TEAM/TeamA.png")} />
        </div>
        <div className="teams">
          <img src={require("../IMAGES/TEAM/TeamB.png")} />
        </div>
      </div>

      <div className="whyChooseUs">
        <div className="text">Why Choose Us</div>
        <p>
          You can trust that you're getting the best quality and value for your
          money. Here are a few reasons why our customers choose us:
        </p>

        <div className="chooseFlex">
          {vids.map((vid, index) => (
            <div className="choose" key={index}>
              <div className="vidCenter">
                <video loop muted autoPlay controls="">
                  <source src={vid.vidsrc} type="video/mp4"></source>
                </video>
              </div>
              <div className="vidTitle">{vid.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
