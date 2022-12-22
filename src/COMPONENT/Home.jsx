import React, { useRef, useState } from "react";
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
const Home = () => {
  const swiperRef = useRef();
  SwiperCore.use([Autoplay]);
  return (
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
              provide both comfort and durability. Shop now and find the perfect
              pair of footwear for your needs!
            </p>
            <button
              className="shopnow forPC"
              style={{ marginTop: "30px", marginBottom: "0px" }}
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

      <div className="Label">
        <span>Featured Product</span>
        <div className="prevNext">
          <div onClick={() => swiperRef.current?.slidePrev()}>
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div onClick={() => swiperRef.current?.slideNext()}>
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <Swiper
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="swiperCon"></div>
          <div className="swiperCon"></div>
          <div className="swiperCon"></div>
          <div className="swiperCon"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperCon"></div>
          <div className="swiperCon"></div>
          <div className="swiperCon"></div>
          <div className="swiperCon"></div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="btn-seeAll">See All Products</div> */}
      <div className="Label">
        <div>Select a category</div>
      </div>

      <div className="swiper">
        <div className="swiperCon"></div>
        <div className="swiperCon"></div>
        <div className="swiperCon"></div>
        <div className="swiperCon"></div>
      </div>

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
  );
};

export default Home;
