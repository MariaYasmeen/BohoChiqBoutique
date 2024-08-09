import React, { useEffect, useState } from "react";
import {Navbar} from "../Navbar/Navbar";
import {Footer} from "../Components/Footer"
import { Link, useNavigate  } from "react-router-dom";
import {delFromCart} from "../Redux/CartSlice";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import {createSlug} from "../Functions/createSlug";

export const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  // Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  // Calculate total price of items in the cart
  useEffect(() => {
    const total = cartItems.reduce((acc, cartItem) => {
      // Ensure the price is parsed as a float and not NaN
      const itemPrice = parseFloat(cartItem.price);
      if (!isNaN(itemPrice)) {
        return acc + itemPrice; // Accumulate valid prices
      }
      return acc; // Skip invalid prices
    }, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const deleteCart = (item) => {
    dispatch(delFromCart(item));
  };

  // Define shipping cost
  const shipping = 100; // Constant shipping cost
  const grandTotal = shipping + totalAmount; // Calculate grand total
  console.log("Total Amount:", totalAmount); // Debugging: Log the total amount
  console.log("Grand Total:", grandTotal); // Debugging: Log the grand total

  // Store cart items in local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const navigate = useNavigate();

  const handleBackToShop = () => {
    navigate(-1); // Navigates back one step in the browser's history
  };
  return (
    <>
    <Helmet>
        <title>Cart | M.Yasmeen</title>
      </Helmet>
      <Navbar />
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cartItems.length} items
                </div>
              </div>
            </div>

            {cartItems.map((item, index) => {
              const { title, price, code, image1 } = item;
              const slug = createSlug(title); // Generate slug for the title

              return (
                <div className="row border-top border-bottom" key={index}>
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img className="img-fluid" src={image1} alt={title} />
                    </div>
                    <div className="col">
                      <div className="row text-muted">{title}</div>
                      <div className="row">{code}</div>
                    </div>
                    <div className="col">
                      <a href="#">-</a>
                      <a href="#" className="border">
                        1
                      </a>
                      <a href="#">+</a>
                    </div>
                    <div className="col">
                      PKR {price} {/* Display item price */}
                      <button
                        onClick={() => deleteCart(item)}
                        className="del-icon"
                      >
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

<div className="back-to-shop">
      <button onClick={handleBackToShop} style={{ border: "none", background: "none", cursor: "pointer" }}>
        <i className="fa-solid fa-arrow-left"></i> Back to shop</button>
    </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col">ITEMS {cartItems.length}</div>
              <div className="col text-right">PKR {totalAmount.toFixed(2)}</div>{" "}
              {/* Show total amount */}
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard Delivery - PKR {shipping.toFixed(2)}
                </option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              className="row"
              style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">PKR {grandTotal.toFixed(2)}</div>{" "}
              {/* Show grand total */}
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
