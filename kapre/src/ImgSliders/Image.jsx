import React from "react";
import "./Images.css"

const Image = ({ imageSrc, heading, subheading, buttonText }) => {
  return (
    <div className="image-hover-card">
      <div className="image-container">
        <img src={imageSrc} alt="Hover" className="card-image" />
        <div className="overlay">
          <div className="text">
            <h2>{heading}</h2>
            <p>{subheading}</p>
            <button className="action-button">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
