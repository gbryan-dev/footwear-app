import React, { useState, useEffect } from "react";
import "./CSS/ViewProduct.css";
import { useLocation, useNavigate } from "react-router-dom";
import AllProducts from "./PRODUCTS/AllProducts";
import SnackBar from "./SnackBar";

const ViewProduct = () => {
  const navI = useNavigate();

  const [getEmailLocal, setEmaiLocal] = useState(localStorage.getItem("Email"));
  useEffect(() => {
    setEmaiLocal(localStorage.getItem("Email"));
    if (getEmailLocal === null) return navI("/SignInUp");
  }, []);

  const [open, setOpen] = useState(false);
  let getData = useLocation();
  console.log(getData);
  const type = AllProducts.filter((prod) => prod.name === getData.state.name)[0]
    .type;

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  const colors = ["#3fd6aa", "#cacbd7", "#ae2337", "#c2707f"];
  const sizes = [7, 8, 9, 10, 11];

  const [isActive, setIsActive] = useState("7");
  const [Color, setColor] = useState("#3fd6aa");
  const [qty, setQty] = useState(1);

  const price = getData.state.price;
  const name = getData.state.name;

  useEffect(() => {
    setTotalPay(price * qty);
    if (qty <= 0) {
      setQty(1);
    } else if (qty >= 9) {
      setQty(9);
    }
  }, [qty]);

  const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    setQty(qty - 1);
  };

  const [totalPay, setTotalPay] = useState(price * qty);

  const handleActive = (x) => {
    setIsActive(x);
  };
  const handleColor = (x) => {
    setColor(x);
  };

  const addToCart = (qty, name, price) => {
    setOpen(true);

    const newItemToCart = {
      name,
      price,
      qty: Number(qty),
    };

    setCart([...cart, newItemToCart]);

    // console.log(context.filter((m) => m.id == b)[0].qty);
  };

  return (
    <div className="BNCon">
      <div className="BNFlex">
        <div className="BNLeft">
          <div>
            <img src={require("./IMAGES/FeatureBG.png")} />
          </div>
          <div>
            <img
              src={
                AllProducts.filter(
                  (prod) => prod.name === getData.state.name
                )[0].img
              }
            />
          </div>
        </div>
        <div className="BNRight">
          <div className="freeship">FREE SHIPPING</div>
          <div className="getStateName">{getData.state.name}</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="thePrice">
            <span>Size :</span>
            <div className="sizes">
              {sizes.map((size, index) => (
                <div
                  key={index}
                  className={isActive == size ? "Myactive" : ""}
                  onClick={() => handleActive(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="thePrice">
            <span>Color : </span>
            <div className="sizes">
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={Color == color ? "Myactive" : ""}
                  onClick={() => handleColor(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className="thePrice">
            <span>Total Price : </span>
            <div style={{ fontWeight: "800", fontFamily: "Inter" }}>
              P{totalPay.toFixed(2)}
            </div>
          </div>
          <br />
          <hr />
          <div className="BTNFlex">
            <div>
              <button onClick={handleDecrement}>
                <i class="fa-solid fa-minus"></i>
              </button>
              <span>{qty}</span>
              <button onClick={handleIncrement}>
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div onClick={() => addToCart(qty, name, totalPay)}>
              <i
                class="fa-solid fa-cart-shopping"
                style={{ marginRight: "5px" }}
              ></i>{" "}
              Add to cart
            </div>
          </div>
          <div className="btnBuy">
            <i
              class="fa-solid fa-credit-card"
              style={{ marginRight: "5px" }}
            ></i>{" "}
            Buy now
          </div>
        </div>
      </div>

      <SnackBar open={open} setOpen={setOpen} />
    </div>
  );
};

export default ViewProduct;
