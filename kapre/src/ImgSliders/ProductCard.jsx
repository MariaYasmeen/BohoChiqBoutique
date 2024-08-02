import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Images.css';

const ProductCard = ({ id, image1, image2, title, code, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleQuickView = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img src={isHovered ? image2 : image1} alt="Product" />
        {isHovered && <button className="buy-button" onClick={handleQuickView}>QUICK VIEW</button>}
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
