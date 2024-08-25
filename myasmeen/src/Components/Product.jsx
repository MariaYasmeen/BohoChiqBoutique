import React from "react";
import useFetchCollection from "../Utils/useFetchCollection";
import { Link, useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LoaderSc from "./LoaderSc";
import { addToCart } from "../Redux/CartSlice";
import { addToWishlist, delFromWishlist } from "../Redux/WishlistSlice";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from 'react-redux';
import { AddInWishList } from "../Functions/AddInWishList";
import ProductSlider from "../ImgSliders/ProductSlider";
import "./Components.css"; // Import your CSS file for custom styles

export const Product = () => {
  const { title } = useParams();
  const location = useLocation();
  const collectionName = location.state.collectionName;

  const dispatch = useDispatch();

  const { data: products, loading, error } = useFetchCollection(collectionName);

  const [wishlist, setWishlist] = React.useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const item = products.find((prod) => prod.title && createSlug(prod.title) === title);

  if (!item) {
    return <div className="product-not-found">Product not found</div>;
  }

  const { image1, image2, image3, title: itemTitle, price, desc, id } = item;

  const isInWishlist = wishlist.some((product) => product.id === id);

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(delFromWishlist(item)); // Remove item from Redux store
    } else {
      dispatch(addToWishlist(item)); // Add item to Redux store
    }
    AddInWishList(item, wishlist, setWishlist, dispatch, addToWishlist, delFromWishlist); // Update local storage and Redux
  };

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to the cart");
  };

  const images = [
    `${image1}`,
    `${image2}`,
    `${image3}`,
  ];

  return (
    <>
      <Helmet>
        <title>{itemTitle} - M.Yasmeen</title>
        <meta name="description" content={`Buy ${itemTitle} for PKR ${price}.`} />
      </Helmet>
      <Navbar />
      <div className="product-container">
        <div className="product-image-container">
          <ProductSlider images={images} />
        </div>
        <div className="product-description-container">
          <h1 className="product-title">{itemTitle}</h1>
          <p className="product-code">JS-026-GOLD | IN STOCK</p>
          <h3 className="product-save">SAVE 20%</h3>
          <h2 className="product-price">PKR {price}</h2>
          <p className="product-gst">GST Inclusive</p>
          <div className="product-buttons-container">
            <button 
              className="product-add-to-bag"
              onClick={() => handleAddCart(item)}
            >
              ADD TO BAG<i className="fas fa-bag-shopping"></i>
            </button>
            <button onClick={handleWishlist} className="product-wishlist-button">
              {isInWishlist ? (
                <>
                  Remove from Wishlist
                  <i className={`fas fa-heart`} />
                </>
              ) : (
                <>
                  Add to Wishlist
                  <i className={`far fa-heart`} />
                </>
              )}
            </button>
          </div>
          <p className="product-disclaimer">
            <span className="disclaimer-highlight">Disclaimer:</span> Product color may vary slightly due to photographic lighting or your device settings.
          </p>
          <p className="product-shipping">
            <i className="fas fa-ship"></i> 3 to 5 Working Days Nationwide Shipping
          </p>
          <hr className="product-divider" />
          <h2 className="product-description-title">Description</h2>
          <p className="product-description-text">{desc}</p>
          <p className="product-shipping-link">
            <Link to="" className="product-shipping-details-link">
              Click Here
            </Link>{" "}
            to get more details on our shipping & delivery policies.
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
