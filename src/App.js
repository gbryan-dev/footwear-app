import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Categories from "./COMPONENT/Categories";
import AboutUs from "./COMPONENT/AboutUs";
import Header from "./COMPONENT/Header";
import Footer from "./COMPONENT/Footer";
import Home from "./COMPONENT/Home";
import Products from "./COMPONENT/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
