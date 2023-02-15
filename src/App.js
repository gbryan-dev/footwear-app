import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
// import Categories from "./COMPONENT/Categories";
import AboutUs from "./COMPONENT/AboutUs";
import Header from "./COMPONENT/Header";
import Footer from "./COMPONENT/Footer";
import Home from "./COMPONENT/Home";
import Products from "./COMPONENT/Products";
import { useState, useEffect, useRef, createContext } from "react";
import Profile from "./COMPONENT/Profile";
import ViewProduct from "./COMPONENT/ViewProduct";
import SignInUp from "./COMPONENT/SignInUp";

export const context = createContext();

function App() {
  const topRef = useRef();
  const location = useLocation();

  useEffect(() => {
    localStorage.getItem("Email");
    topRef.current.scrollIntoView();
  }, [location]);

  return (
    <>
      <div
        ref={topRef}
        style={{
          height: "10px",
          width: "100%",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      ></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ViewProduct" element={<ViewProduct />} />
        <Route path="/SignInUp" element={<SignInUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
