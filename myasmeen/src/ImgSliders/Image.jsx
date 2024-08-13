import React from "react";
import BoxButton from "../Animations/BoxButton";
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
            <BoxButton buttonName={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
