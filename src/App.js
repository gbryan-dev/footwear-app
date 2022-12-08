import pair1 from "./IMAGES/BANNER/Pair1.png";
import pair2 from "./IMAGES/BANNER/Pair2.png";
import pair3 from "./IMAGES/BANNER/MorePair.png";
import "./App.css";
import Categories from "./COMPONENT/Categories";

function App() {
  return (
    <>
      <div className="back"></div>
      <div className="front">
        <section className="section1">
          <div className="left">
            <span>PICK THE</span>
            <span>PERFECT</span>
            <span>PAIR</span>
            <p>
              We have the best collections of footwear to meet your needs,
              appear confidently. Get a special discount for you starting today.
            </p>
            <button className="shopnow forPC">
              <i className="fa-solid fa-magnifying-glass"></i> MARKETPLACE
            </button>
          </div>
          <div className="right">
            <img src={pair1} />
            <img src={pair2} />
            <img src={pair3} />
          </div>
        </section>

        <button className="shopnow forphone">
          <i className="fa-solid fa-magnifying-glass"></i> MARKETPLACE
        </button>
      </div>

      <Categories />

      <div className="reviews">
        {/* <img src={require("./IMAGES/REVIEWS/REVIEWS.png")} />
          <img src={require("./IMAGES/REVIEWS/REVIEWS.png")} /> */}
      </div>
    </>
  );
}

export default App;
