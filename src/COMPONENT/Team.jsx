import React, { useState, useRef, useEffect } from "react";
import "../COMPONENT/CSS/OurTeam.css";
import VidA from "./Vids/VidA.mp4";
import VidB from "./Vids/VidB.mp4";
import VidC from "./Vids/VidC.mp4";
import VidD from "./Vids/VidD.mp4";
import { Alert, Snackbar, Button } from "@mui/material";
import axios from "axios";

const Team = () => {
  const refName = useRef();
  const refEmail = useRef();
  const refMsg = useRef();
  const subMit = useRef();

  const [isDisabled, setIsDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sentmsg, setSentmsg] = useState("Send Message");
  const [ifsent, setSent] = useState(false);

  const vids = [
    { vidsrc: VidA, title: "24hr Customer Service" },
    { vidsrc: VidB, title: "High-quality materials" },
    { vidsrc: VidC, title: "Affordable prices" },
    { vidsrc: VidD, title: "Free and fast delivery" },
  ];

  const contactSubmit = () => {
    if (
      refName.current.value.length > 0 &&
      refEmail.current.value.includes("@") &&
      refMsg.current.value.length > 0
    )
      return setTimeout(() => {
        subMit.current.disabled = true;
        refName.current.disabled = true;
        refEmail.current.disabled = true;
        refMsg.current.disabled = true;
        setSentmsg("Message Sent");
        setSent(true);
      }, 4000);
  };

  // FOR GET DATA WITH DATE AND TIME
  // const [contactDatas, setContactDatas] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://script.googleusercontent.com/macros/echo?user_content_key=XzR-mY58IsTZQrcHiw9pS7_SUZk6z_wdOmoSxG5hS5dqcw4Cw5OKjxFVlr09LkkX_FxF9nmRq8GGFJmE4n-65n3r08T9HoJWOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa68ImxJL3kRS3eMa2t0AR2XHImnxhBByvaW0fXh3vaBqPkX0HPYSAZaqQ_LTiRhD0QEjcxCXfxoRJ8lPTfx9kn9liwtpQtwmgQXIuFltvcj9bVKn3MpuO19m_4qgmdpvDQ&lib=MxxMP8-hQFqn_huhbGq1neCxfEmHMXltD"
  //     )
  //     .then((res) => {
  //       setContactDatas(res.data);
  //     });
  // }, []);

  // const formatAMPM = (date) => {
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   var ampm = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12;
  //   hours = hours ? hours : 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   var strTime = hours + ":" + minutes + " " + ampm;
  //   return strTime;
  // };

  // function getDate(date) {
  //   var newDate = new Date(
  //     date.getTime() + date.getTimezoneOffset() * 60 * 1000
  //   );

  //   var offset = date.getTimezoneOffset() / 60;
  //   var hours = date.getHours();

  //   newDate.setHours(hours - offset);

  //   return (
  //     newDate.getMonth() +
  //     1 +
  //     "/" +
  //     (newDate.getDate() + 1) +
  //     "/" +
  //     newDate.getFullYear()
  //   );
  // }

  return (
    <div className="ourteam">
      <div className="text">Our Team</div>
      <div className="teamflex">
        <div className="teams">
          <img src={require("./IMAGES/TeamA.png")} />
        </div>
        <div className="teams">
          <img src={require("./IMAGES/TeamB.png")} />
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

      <div className="text">Our Partners</div>
      <section class="partners">
        <div class="partners-img-container">
          <div class="partners-img"></div>
        </div>
      </section>

      <div className="ContactUS">
        <div className="ContactLeft">
          <span>Contact Us</span>
          <p>
            Fill up the form and Our Team will get back to you within 24 hours.
          </p>
          <div className="contactsR">
            <div>
              <i class="fa-solid fa-phone"></i> +63 912 345 6789
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i> hello@G2footwear.com
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i> CM Recto USTP 9000
            </div>
          </div>
          <div className="socMed">
            <div>
              <i class="fa-brands fa-square-facebook"></i>
            </div>
            <div>
              <i class="fa-brands fa-github"></i>
            </div>
            <div>
              <i class="fa-brands fa-square-twitter"></i>
            </div>
          </div>
        </div>
        <div className="ContactRight">
          <form
            action="https://script.google.com/macros/s/AKfycbzgaq49mqhofzxbSZWhWDDWkOIHF2e5a2z-Ii__4qBljaptyNv15prHeqIz-qW4I9YXvw/exec"
            className="contactform"
            method="POST"
            target="hiddenFrame"
            autoComplete="off"
          >
            <div style={{ display: "none" }}>
              <input
                type="text"
                name="myDate"
                required
                value={new Date().toLocaleDateString().toString()}
                spellcheck="false"
                ref={refName}
                disabled={isDisabled}
              />
              <input
                type="text"
                name="Time"
                required
                value={new Date().toLocaleTimeString()}
                spellcheck="false"
                ref={refName}
                disabled={isDisabled}
              />
            </div>
            <label>
              <div>Your Name</div>
              <input
                type="text"
                name="Name"
                required
                spellcheck="false"
                ref={refName}
                disabled={isDisabled}
              />
            </label>
            <label>
              <div>Email</div>
              <input
                type="email"
                name="Email"
                required
                spellcheck="false"
                ref={refEmail}
                disabled={isDisabled}
              />
            </label>
            <label>
              <div>Message</div>
              <textarea
                type="text"
                name="Message"
                required
                ref={refMsg}
                spellcheck="false"
                disabled={isDisabled}
              />
            </label>

            <button type="submit" onClick={contactSubmit} ref={subMit}>
              {ifsent ? (
                <i class="fa-solid fa-check"></i>
              ) : (
                <i className="fa-solid fa-paper-plane"></i>
              )}
              &nbsp;&nbsp;{sentmsg}
            </button>
          </form>
        </div>
      </div>

      {/* FOR GET DATA WITH DATE AND TIME
      <div className="ContactRight">
        {contactDatas?.map((data, index) => (
          <div key={index}>
            <div>Date: {getDate(new Date(data.myDate))}</div>
            <div>Time: {formatAMPM(new Date(data.Time))}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Team;
