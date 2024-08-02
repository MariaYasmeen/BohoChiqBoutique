import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { Link, useNavigate } from 'react-router-dom';
import { addToWishlist } from '../Redux/WishlistSlice';
import './Images.css';

const ProductCard = ({ id, image1, image2, title, code, price }) => {
  // Example of creating a slug from a title
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  // Manage wishlist state
  const [isInWishlist, setIsInWishlist] = useState(() => {
    // Retrieve initial wishlist state from local storage
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
    return storedWishlist[id] || false;
  });

  // Update local storage whenever the wishlist state changes
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
    storedWishlist[id] = isInWishlist;
    localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
  }, [id, isInWishlist]);

  const handleQuickView = () => {
    navigate(`/product/${slug}`);
  };

  // Create the product object to add to the wishlist
  const product = { id, image1, image2, title, code, price };

  // Add to wishlist function
  const toggleWishlist = () => {
    setIsInWishlist((prev) => !prev); // Toggle wishlist state
    dispatch(addToWishlist(product)); // Use dispatch to add to wishlist
    console.log('Product added to the wishlist');
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <Link to={`/product/${slug}`}>
          <img src={isHovered ? image2 : image1} alt={title} />
          {isHovered && <button className="buy-button" onClick={handleQuickView}>QUICK VIEW</button>}
        </Link>

        {/* Icon on the top right corner */}
        <button className="wishlist-button" onClick={toggleWishlist}>
          <i className={`fa-heart icon-top-right ${isInWishlist ? 'fa-solid' : 'fa-regular'}`} ></i>
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

export default ProductCard;
