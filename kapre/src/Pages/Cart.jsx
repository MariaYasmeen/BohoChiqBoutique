import React from "react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../ImgSliders/ProductCard";
import { useSelector } from "react-redux";
import "./Pages.css"
import { generateSlug } from "../Functions/generateSlug";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      {cartItems.map((item, index) => {
        const { title, price, desc, imageURL } = item;
        const slug = generateSlug(title);

        return (
          <div className="cartcontainer " key={index}>
            <div className="cartimg">
              <Link to={`/product/${slug}`}>
                <img src={imageURL} alt={title} />
              </Link>
            </div>
            <div className="carttxt">
              <div className="product-details">
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="">
                  <p>In Stock</p>
                  <p className="price">PKR {price}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </>
  );
};
