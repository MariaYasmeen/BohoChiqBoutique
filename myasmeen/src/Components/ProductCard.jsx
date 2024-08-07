// src/components/ImgSliders.jsx/ProductCard.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToWishlist } from "../Redux/WishlistSlice"; // Ensure this is the correct import path

export const ProductCard = ({
  id,
  image1,
  image2,
  title,
  code,
  price,
  collectionName,
}) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  // Initialize the wishlist state from localStorage
  const [isInWishlist, setIsInWishlist] = useState(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    return storedWishlist.includes(id);
  });

  // Update localStorage whenever the wishlist state changes
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (isInWishlist) {
      if (!storedWishlist.includes(id)) {
        storedWishlist.push(id);
      }
    } else {
      const index = storedWishlist.indexOf(id);
      if (index > -1) {
        storedWishlist.splice(index, 1);
      }
    }

    localStorage.setItem("wishlist", JSON.stringify(storedWishlist));
  }, [id, isInWishlist]);

  // Add to wishlist function
  const toggleWishlist = () => {
    setIsInWishlist((prev) => !prev); // Toggle wishlist state
    dispatch(addToWishlist(id)); // Use dispatch to add to wishlist with the correct product id
    console.log("Product added to the wishlist");
  };

  const handleQuickView = () => {
    navigate(`/product/${slug}`, { state: { collectionName } });
  };

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <Link to={`/product/${slug}`} state={{ collectionName }}>
          <img src={isHovered ? image2 : image1} alt={title} />
          {isHovered && (
            <button className="buy-button" onClick={handleQuickView}>
              QUICK VIEW
            </button>
          )}
        </Link>

        {/* Icon on the top right corner */}
        <button className="wishlist-button" onClick={toggleWishlist}>
          <i
            className={`fa-heart icon-top-right ${
              isInWishlist ? "fa-solid" : "fa-regular"
            }`}  ></i>
        </button>

        {/* Badge on the top left corner */}
        <span className="badge-top-left">NEW</span>
      </div>
      <div className="product-details">
        <h2>{title}</h2>
        <p>{code}</p>
        <div className="product-info">
          <p>In Stock</p>
          <p className="price">PKR {price}</p>
        </div>
      </div>
    </div>
  );
};
