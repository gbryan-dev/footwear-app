import pair1 from "./IMAGES/BANNER/Pair1.png";
import pair2 from "./IMAGES/BANNER/Pair2.png";
import pair3 from "./IMAGES/BANNER/MorePair.png";
import "./App.css";
// import Categories from "./COMPONENT/Categories";
import AboutUs from "./COMPONENT/AboutUs";
import Header from "./COMPONENT/Header";
import Team from "./COMPONENT/Team";

function App() {
  return (
    <>
      <Header />
      <div className="back"></div>
      <div className="front">
        <section className="section1">
          <div className="left">
            <span>PICK THE</span>
            <span>PERFECT</span>
            <span>PAIR</span>
            <p>
              Our products are made from the finest materials and designed to
              provide both comfort and durability. Shop now and find the perfect
              pair of footwear for your needs!
            </p>
            <button className="shopnow forPC">
              <i className="fa-solid fa-magnifying-glass"></i> OUR PRODUCTS
            </button>
          </div>
          <div className="right">
            <img src={pair1} />
            <img src={pair2} />
            <img src={pair3} />
          </div>
        </section>

        <button className="shopnow forphone">
          <i className="fa-solid fa-magnifying-glass"></i> OUR PRODUCTS
        </button>
      </div>

      <AboutUs className="about" />
      <Team />
    </>
  );
}

export default App;
