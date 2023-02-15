import React, { useRef, useState } from "react";
import "./CSS/Footer.css";

const Footer = () => {
  const subs = useRef();
  const [isDis, setIsDis] = useState(false);
  const [substring, setSubstring] = useState("Subscribe");
  const Subsmit = () => {
    if (subs.current.value.includes("@")) {
      return setTimeout(() => {
        setIsDis(true);
        setSubstring("SUBSCRIBED");
      }, 4000);
    }
  };

  return (
    <div className="FooterCon">
      <footer className="footer">
        <div className="container" style={{ background: "#111111" }}>
          <div className="footer_inner">
            <div className="mynewsletter">
              <h1 class="text-center text-white text-5xl font-bold font-serif">
                Newsletter.
              </h1>
              <p class="text-center mt-2">
                Stay up to date with our latest news and products
              </p>
              <form
                action="https://script.google.com/macros/s/AKfycbzJWIR2rZfS7xq73C0zZ5fjkS4BeSZGwaA6PstlFi9uuGg50CnFupt5JnYGBAm2dtgj/exec"
                method="POST"
                autoComplete="off"
                class="relative flex items-center my-10"
              >
                <div style={{ display: "none" }}>
                  <input
                    type="text"
                    name="myDate"
                    required
                    value={new Date().toLocaleDateString().toString()}
                    spellCheck="false"
                  />
                  <input
                    type="text"
                    name="Time"
                    required
                    value={new Date().toLocaleTimeString()}
                    spellCheck="false"
                  />
                </div>
                <input
                  type="email"
                  name="Subscribers"
                  id="email"
                  ref={subs}
                  disabled={isDis}
                  placeholder="your@email.com"
                  class="text-white w-full bg-transparent py-3 pl-3 pr-20 border-2 border-solid border-green-500 rounded-0 outline-none placeholder:text-white/50"
                />
                <button
                  onClick={Subsmit}
                  type="submit"
                  disabled={isDis}
                  class="absolute h-full right-0 bg-green-500 text-black px-5 flex items-center cursor-pointer "
                >
                  <p class="hidden sm:block" style={{ fontWeight: "bold" }}>
                    {substring}
                  </p>
                  <i class="bx bx-chevron-right text-2xl block sm:hidden"></i>
                </button>
              </form>
            </div>
            <div className="footer_copyright">
              <div>
                Made with
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  width="22"
                  height="22"
                  className="sol-icon"
                >
                  <g id="icon-heart">
                    <path
                      id="Vector"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.54154 5.54154C5.59693 3.48615 8.92938 3.48615 10.9848 5.54154L12 6.55677L13.0152 5.54154C15.0706 3.48615 18.4031 3.48615 20.4585 5.54154C22.5138 7.59693 22.5138 10.9294 20.4585 12.9848L12.3536 21.0897C12.1583 21.2849 11.8417 21.2849 11.6464 21.0897L3.54154 12.9848C1.48615 10.9294 1.48615 7.59693 3.54154 5.54154Z"
                      fill=" #FF0000"
                    ></path>
                  </g>
                </svg>
                by &nbsp;
                <span className="sl-footer-links__marked-text">Bryan G</span>
              </div>
              © G2 Footwear | 2022
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
