// src/components/Product.jsx

import React, { useEffect } from "react";
import useFetchCollection from "../Utils/useFetchCollection";
import { Link, useParams, useLocation } from "react-router-dom";
import LoaderSc from "./LoaderSc";
import { addToCart } from "../Redux/CartSlice";
import { addToWishlist } from "../Redux/WishlistSlice";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from 'react-redux';

export const Product = () => {
  const { title } = useParams(); // This is actually the slug now
  const location = useLocation();
  const collectionName = location.state.collectionName; 

  const dispatch = useDispatch();

  const handleWishlist = (product) => {
    dispatch(addToWishlist(product));
    console.log("Product added to the wishlistItems");
  };

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to the cart");
  };

  
  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const { data: products, loading, error } = useFetchCollection(collectionName);

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Find the product with the matching slug
  const item = products.find((prod) => prod.title && createSlug(prod.title) === title);

  if (!item) {
    return <div>Product not found</div>;
  }

  const { imageURL, title: itemTitle, price, desc } = item;

  return (
    <>
      <Navbar />
      <div className="productcss">
        <div className="con1">
          <div className="imgcontainer">
            <ul className="thumbnails">
              <li>
                <Link to="#slide1">
                  <img src={imageURL} alt={itemTitle} />
                </Link>
              </li>
              <li>
                <Link to="#slide2">
                  <img src={imageURL} alt={itemTitle} />
                </Link>
              </li>
              <li>
                <Link to="#slide3">
                  <img src={imageURL} alt={itemTitle} />
                </Link>
              </li>
            </ul>

            <ul className="slides">
              <li id="slide1">
                <img src={imageURL} alt={itemTitle} />
              </li>
              <li id="slide2">
                <img src={imageURL} alt={itemTitle} />
              </li>
              <li id="slide3">
                <img src={imageURL} alt={itemTitle} />
              </li>
            </ul>
          </div>
        </div>
        <div className="cont2">
          <h3>{itemTitle}</h3>
          <p>JS-026-GOLD | IN STOCK</p>

          <h7>SAVE 20%</h7>
          <h5>PKR {price}</h5>
          <p>GST Inclusive</p>
          <div className="cont2btns">
            <button style={{ backgroundColor: "black", color: "white" }} onClick={() => handleAddCart(item)}>
              ADD TO CART
            </button>
            <button onClick={() => handleWishlist(item)}>Add to Wishlist</button>
          </div>
          <p>
            Disclaimer: Product color may vary slightly due to photographic
            lighting or your device settings.
          </p>
          <h4>Description</h4>
          <p>{desc}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};
