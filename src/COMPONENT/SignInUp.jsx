import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/SignInUp.css";
import { useNavigate, useLocation } from "react-router-dom";

const SignInUp = () => {
  const location = useLocation();

  const navI = useNavigate();
  const [option, setOption] = useState(1);
  const [allCounts, setAllAccounts] = useState([]);
  const [EmailVal, setEmailVal] = useState("");
  const [PassVal, setPassVal] = useState("");
  const [Username, setUsername] = useState("");
  const [ifAllCorrect, setIfAllCorrect] = useState(false);
  const [opt1ifAllCorrect, setOpt1IfAllCorrect] = useState(false);
  const [warn1, setWarn1] = useState(false);
  const [warn2, setWarn2] = useState(false);
  const [warn3, setWarn3] = useState(false);
  const [warn01, setWarn01] = useState(false);
  const [warn02, setWarn02] = useState(false);
  const [already, setAlready] = useState(false);

  const getAccounts =
    "https://script.googleusercontent.com/macros/echo?user_content_key=WwHrRtrY548klF_zDjCo4EW6fMHcGsMe09kOje9sZQ3nH6r8sOqDwGXl3CiIjih4i-e9d50ACXDlpVOwmu_MefVuItL6rY4wOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa6qe2huJl1hDrqrn7XE_A8PpNG2513NfQKKLPkS0BA_6XKA58QMY5EpLNFK9UyoNw30nJa3qZGmj7XBJvPyro_OOTvD8TLjEJQXIuFltvcj9bVKn3MpuO19m_4qgmdpvDQ&lib=MX8tg4JaW6VzYNoFtRXJZLyxfEmHMXltD";
  useEffect(() => {
    axios.get(getAccounts).then((res) => setAllAccounts(res.data));
  }, []);

  const getEmails = allCounts.filter((acc) => acc.Email == EmailVal);
  const getPassword = getEmails[0]?.Password;
  const getUsername = getEmails[0]?.Username;
  const getGender = getEmails[0]?.Gender;
  const getWishList = getEmails.slice(-1)[0]?.WishList;

  useEffect(() => {
    if (option == 2) {
      if (EmailVal.includes("@")) {
        setWarn1(true);
        if (getEmails[0]?.Email === EmailVal) {
          setWarn1(false);
          alert("Account already exists. You have to create a new one!");
          setAlready(true);
        }
      } else setWarn1(false);
    } else {
      if (getEmails[0]?.Email === EmailVal && EmailVal.length !== 0) {
        setWarn01(true);
      } else setWarn01(false);
    }
  }, [EmailVal]);

  useEffect(() => {
    if (option == 2) {
      if (PassVal.length >= 6) {
        setWarn2(true);
      } else setWarn2(false);
    } else {
      if (PassVal == getPassword) {
        setWarn02(true);
      } else setWarn02(false);
    }
  }, [PassVal]);

  useEffect(() => {
    if (option == 2) {
      Username.length >= 1 ? setWarn3(true) : setWarn3(false);
    }
  }, [Username]);

  useEffect(() => {
    if (option == 2) {
      if (warn3 && warn2 && warn1) setIfAllCorrect(true);
      else setIfAllCorrect(false);
    } else {
      if (warn01 && warn02) setOpt1IfAllCorrect(true);
      else setOpt1IfAllCorrect(false);
    }
  }, [warn1, warn2, warn3, warn01, warn02]);

  const handleSubmit = (evt) => {
    alert("Account created");
    setTimeout(() => {
      window.location.reload(true);
    }, 1500);
  };

  const handleLogin = () => {
    localStorage.setItem("Email", EmailVal);
    localStorage.setItem("Password", getPassword);
    localStorage.setItem("Gender", getGender);
    localStorage.setItem("Username", getUsername);
    localStorage.setItem("WishList", JSON.stringify(getWishList.split(",")));

    if (EmailVal === "g2@admin.com") navI("/Profile");
    else if (location.state.goTo === undefined) {
      navI(location.state.goto);
      localStorage.setItem("Reset", true);
    } else {
      navI(location.state.goTo, {
        state: { name: location.state.name, price: location.state.price },
      });
    }
  };

  const [gender, setGender] = useState("Male");

  const handleCreateAcc = () => {
    setOption(2);
  };

  return (
    <div className="formapp">
      <div className="concon">
        <div className="logoImg">
          {getGender === "Male" ? (
            <>
              <img src={require("./IMAGES/Customer_Male.png")} />
              <div className="Username">{getUsername}</div>
            </>
          ) : getGender === "Female" ? (
            <>
              <img src={require("./IMAGES/Customer_Female.png")} />
              <div className="Username">{getUsername}</div>
            </>
          ) : EmailVal === "g2@admin.com" ? (
            <>
              <img src={require("./IMAGES/Admin.png")} />
            </>
          ) : (
            <img src={require("./IMAGES/Logo.png")} />
          )}
        </div>
        {/* <header>
          <div
            className={
              "header-headings " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
            }
          >
            <span>Sign in to your account</span>
            <span>Create an account</span>
          </div>
        </header> */}
        <ul className="options">
          <li
            style={{ color: option === 1 ? "white" : "grey" }}
            onClick={() => setOption(1)}
          >
            Login
          </li>
          <li
            style={{ color: option === 2 ? "white" : "grey" }}
            onClick={handleCreateAcc}
          >
            Create account
          </li>
          <li
            style={{
              color: option === 3 ? "white" : "grey",
            }}
            onClick={() => navI(-1)}
          >
            <i className="fa-solid fa-angle-left"></i> Back
          </li>
        </ul>
        <iframe name="votar" style={{ display: "none" }} />
        <form
          method="POST"
          action="https://script.google.com/macros/s/AKfycbwZus1IjrYAgfiHYTnEOTF-fVHTu-ccPF2yRLsaxrSb4COWLH58tPxVWd0aDgAXWcyH_w/exec"
          className="account-form"
          autoComplete="off"
          target="votar"
        >
          <div
            className={
              "account-form-fields " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
            }
          >
            <div
              className="warning warning1"
              onClick={
                () =>
                  option === 1
                    ? alert("Email not found.")
                    : already && option === 2
                    ? alert(
                        "Account already exists. You have to create a new one!"
                      )
                    : alert("Must contain '@'.")
                // : !already && option === 2
                // ? alert("Must have '@' ...")
                // : ""
              }
              style={{
                display:
                  warn1 && option === 2
                    ? "none"
                    : warn01 && option === 1
                    ? "none"
                    : "block",
              }}
            >
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <div
              className="warning warning2"
              onClick={() =>
                option === 1
                  ? alert("Password not found.")
                  : option === 2
                  ? alert("Must have atleast 6 characters ...")
                  : ""
              }
              style={{
                display:
                  warn2 && option === 2
                    ? "none"
                    : warn02 && option === 1
                    ? "none"
                    : "block",
              }}
            >
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <div
              className="warning warning2"
              style={{
                display:
                  warn2 && option === 2
                    ? "block"
                    : warn02 && option === 1
                    ? "block"
                    : "none",
              }}
            ></div>

            <div
              className="warning warning3"
              onClick={() =>
                option === 2 ? alert("Input field must not be empty.") : ""
              }
              style={{ display: warn3 && option === 2 ? "none" : "block" }}
            >
              <i className="fa-solid fa-circle-exclamation"></i>
            </div>
            <input
              name={option === 1 ? "" : "Email"}
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmailVal(e.target.value)}
            />
            <i className="fa-solid fa-triangle-exclamation warning"></i>
            <input
              id="password"
              name={option === 1 ? "" : "Password"}
              type="password"
              placeholder="Password"
              required={option === 1 || option === 2 ? true : false}
              disabled={option === 3 ? true : false}
              onChange={(e) => setPassVal(e.target.value)}
            />
            <input
              id="repeat-password"
              type="text"
              placeholder="Username"
              name="Username"
              maxLength={8}
              required={option === 2 ? true : false}
              disabled={option === 1 || option === 3 ? true : false}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div style={{ display: "none" }}>
              <input
                type="text"
                name="WishList"
                value="  "
                spellCheck="false"
              />
              <input
                type="text"
                name="myDate"
                value={new Date().toLocaleDateString().toString()}
                spellCheck="false"
              />
              <input
                type="text"
                name="Time"
                value={new Date().toLocaleTimeString()}
                spellCheck="false"
              />
            </div>
            <div className="genderCon">
              <span>Gender</span>
              <div id="gender">
                <div>
                  <input
                    type="radio"
                    onClick={() => setGender("Male")}
                    value="Male"
                    name="z"
                    defaultChecked={true}
                  />
                  <span>Male</span>
                </div>
                 
                <div>
                  <input
                    type="radio"
                    onClick={() => setGender("Female")}
                    value="Female"
                    name="z"
                  />
                  <span>Female</span>
                </div>
                <input
                  style={{ display: "none" }}
                  name="Gender"
                  value={gender}
                />
              </div>
            </div>
          </div>
          <button
            className="btn-submit-form"
            type={ifAllCorrect ? "submit" : "button"}
            onClick={
              ifAllCorrect && option === 2
                ? handleSubmit
                : opt1ifAllCorrect && option === 1
                ? handleLogin
                : ""
            }
            style={{ marginTop: "3px" }}
          >
            {option === 1
              ? "Login"
              : option === 2
              ? "Create Account"
              : "Reset password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInUp;
