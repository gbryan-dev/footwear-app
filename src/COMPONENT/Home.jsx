import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import pair1 from "./IMAGES/Pair1.png";
import pair2 from "./IMAGES/Pair2.png";
import pair3 from "./IMAGES/MorePair.png";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import "../App.css";
import "../index.css";
import "./CSS/Home.css";
import AllProducts from "./PRODUCTS/AllProducts";
import SnackBar from "./SnackBar";

const Home = () => {
  const navI = useNavigate();

  // NEED RESET TO SEND DATA
  if (localStorage.getItem("Reset")) {
    window.location.reload(true);
    localStorage.removeItem("Reset");
  }

  useEffect(() => {
    let myArray = JSON.parse(localStorage.getItem("WishList"));
    if (!myArray) {
      myArray = [];
      localStorage.setItem("WishList", JSON.stringify(myArray));
    }

    if (getEmailLocal === "g2@admin.com") navI("/Profile");
  }, []);

  const [getEmailLocal, setEm] = useState(localStorage.getItem("Email"));

  const AllProds = AllProducts;
  // .map((prod) => ({
  //   ...prod,
  // }));

  const swiperRef = useRef();
  SwiperCore.use([Autoplay]);

  const handleChangeQTYVAL = (e, b) => {
    AllProds.filter((m) => m.id == b)[0].qty = e.target.value;

    if (!(e.target.value === "" || /^[0-9]+$/.test(e.target.value))) {
      AllProds.filter((m) => m.id == b)[0].qty = e.target.value = 1;
    }
  };

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("WishList", JSON.stringify(MyWISHLIST));
    setWishes(JSON.parse(localStorage.getItem("WishList")));
  }, [open]);

  const AddWish = (newWish) => {
    if (getEmailLocal === null) {
      navI("/SignInUp", { state: { goto: -1 } });
    }

    setWishList([...MyWISHLIST, newWish]);

    setOpen(true);
  };

  const [MyWISHLIST, setWishList] = useState(
    JSON.parse(localStorage.getItem("WishList")) === null
      ? []
      : JSON.parse(localStorage.getItem("WishList"))
  );

  const deleteWish = (deleteWish) => {
    setWishList(MyWISHLIST.filter((wish) => wish !== deleteWish));
    localStorage.setItem(
      "WishList",
      JSON.stringify(MyWISHLIST.filter((wish) => wish !== deleteWish))
    );

    setWishes(JSON.parse(localStorage.getItem("WishList")));
  };

  const [getWishes, setWishes] = useState([]);

  const toProds = () => {
    navI("/Products");
  };

  return (
    <>
      <div>
        <div className="back"></div>
        <div className="front">
          <section className="section1">
            <div className="left">
              <span>PICK THE</span>
              <span>PERFECT</span>
              <span>PAIR</span>
              <p>
                Our products are made from the finest materials and designed to
                provide both comfort and durability. Shop now and find the
                perfect pair of footwear for your needs!
              </p>
              <button
                className="shopnow forPC"
                style={{ marginTop: "30px", marginBottom: "0px" }}
                onClick={toProds}
              >
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

        <div className="Featured">
          <div className="featLeft">
            <img src={require("./IMAGES/Home2.png")} />
          </div>
          <div className="featRight">
            <div className="featRightCon">
              <img src={require("./IMAGES/Home1.png")} />
            </div>
            <div className="featRightCon">
              <div>
                <img src={require("./IMAGES/Home3.png")} />
              </div>
              <div>
                <img src={require("./IMAGES/Home4.png")} />
              </div>
            </div>
          </div>
        </div>

        <SnackBar
          open={open}
          setOpen={setOpen}
          message="ITEM ADDED TO WISHLIST"
          to="/Products"
        />

        <div className="Label">
          <span>Featured Product</span>
        </div>

        <div className="ProdFlex">
          {AllProds?.map((prod, index) => {
            return (
              <div className="ProdCon" key={index}>
                <div className="ProdFeatured">
                  <img src={prod.img} />
                </div>
                <div className="ProdBottom">
                  <div className="ProdRoundFlex">
                    <div></div>
                    <div></div>
                  </div>

                  <div
                    className="plus"
                    style={{
                      border:
                        getWishes?.filter((wish) => wish === prod.name)
                          .length === 1
                          ? "1px solid red"
                          : "1px solid black",
                    }}
                  >
                    {getWishes?.filter((wish) => wish === prod.name).length ===
                    1 ? (
                      <i
                        className="fa-solid fa-heart-circle-check"
                        style={{ color: "red" }}
                        onClick={() => deleteWish(prod.name)}
                      ></i>
                    ) : (
                      <i
                        className="fa-solid fa-heart-circle-plus"
                        onClick={() => AddWish(prod.name)}
                      />
                    )}

                    {/* {prod.addedwish ? (
                        <i className="fa-solid fa-heart-circle-check"></i>
                      ) : (
                        <i className="fa-solid fa-heart-circle-plus"></i>
                      )} */}

                    {/* <div className="myqty">
                        <div>Qty: </div>
                        <input
                          type="text"
                          maxLength="1"
                          placeholder="1"
                          max="10"
                          defaultValue="1"
                          onChange={(e) => handleChangeQTYVAL(e, index)}
                          onKeyPress={preventMinus}
                          name="CartQty"
                        />
                        <button type="submit">Add</button>
                      </div> */}
                  </div>
                  <div className="ProdName">{prod.name}</div>
                  <div className="ProdPrice">
                    <span>₱</span> {prod.price}
                  </div>
                  <div className="ProdBtn">
                    <div>
                      <NavLink
                        style={{
                          color: "black",
                          textDecoration: "none",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          background: "transparent",
                        }}
                        state={{
                          name: prod.name,
                          price: prod.price,
                          goTo: "/ViewProduct",
                        }}
                        to={
                          getEmailLocal === null ? "/SignInUp" : "/ViewProduct"
                        }
                      >
                        View
                      </NavLink>
                    </div>
                    <div>Buy Now</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="btn-seeAll">See All Products</div> */}

        <div className="Bundle">
          <img src={require("./IMAGES/BundleCP.png")} className="forCP" />
          <div>
            <img src={require("./IMAGES/BundlePC1.png")} />
          </div>
          <div>
            <img src={require("./IMAGES/BundlePC2.png")} />
          </div>
        </div>

        <div className="Label">
          <div>Customer Reviews</div>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pauseOnMouseEnter={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="reviewsCon"></div>
            <div className="reviewsCon"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewsCon"></div>
            <div className="reviewsCon"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="reviewsCon"></div>
            <div className="reviewsCon"></div>
          </SwiperSlide>
        </Swiper>

        <div className="btn-seeAll">SEE ALL PRODUCTS</div>
      </div>
    </>
  );
};

export default Home;
