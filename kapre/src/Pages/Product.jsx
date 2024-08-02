import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import DBContext from '../Context/DBContext';
import { addToCart } from '../Redux/CartSlice';
import { addToWishlist } from '../Redux/WishlistSlice';
import { Navbar } from "../Components/Navbar";
import "./Pages.css";
import { useDispatch, useSelector } from 'react-redux';

export const Product = () => {
  // Get the product slug from the URL parameters
  const { title } = useParams(); // This is actually the slug now
  const { product } = useContext(DBContext);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const wishlistItems = (product) => {
    dispatch(addToWishlist(product));
    console.log(wishlistItems);
    console.log("Product added to the wishlistItems");
  };


  const addCart = (product) => {
    dispatch(addToCart(product));
    console.log(cartItems);
    console.log("Product added to the cart");
  };

  // Helper function to create a slug
  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  // Find the product with the matching slug
  const item = product.find((prod) => createSlug(prod.title) === title);

  if (!item) {
    return <div>Product not found</div>;
  }

  const { title: itemTitle, price, desc, imageURL } = item;

  return (
    <>
      <Navbar />
      <div className="productcss">
        <div className="con1">
          <div className="imgcontainer">
            <ul className="thumbnails">
              <li><Link to="#slide1"><img src={imageURL} alt={itemTitle} /></Link></li>
              <li><Link to="#slide2"><img src={imageURL} alt={itemTitle} /></Link></li>
              <li><Link to="#slide3"><img src={imageURL} alt={itemTitle} /></Link></li>
            </ul>

            <ul className="slides">
              <li id="slide1"><img src={imageURL} alt={itemTitle} /></li>
              <li id="slide2"><img src={imageURL} alt={itemTitle} /></li>
              <li id="slide3"><img src={imageURL} alt={itemTitle} /></li>
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
            <button style={{ backgroundColor: "black", color: "white" }} onClick={() => addCart(item)}>ADD TO CART</button>
            <button onClick={() => wishlistItems(item)}>Add to Wishlist</button>
          </div>
          <p>Disclaimer: Product color may vary slightly due to photographic lighting or your device settings.</p>
          <h4>Description</h4>
          <p>{desc}</p>
        </div>

      </div>
    </>
  );
}
