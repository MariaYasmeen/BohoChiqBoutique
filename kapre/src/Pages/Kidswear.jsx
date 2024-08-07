// src/components/Pages.jsx

import React from "react";
import fecthCollData from "../Utils/fetchCollData";
import { ProductCard } from "../Components/ProductCard";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import LoaderSc from "../Components/LoaderSc"; // Import the LoadingScreen component

const Kidswear = () => {
  const { data: products, loading, error, showLoader } = fecthCollData("Kidswear");

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }


  return (
    <>
      <Navbar />
      {showLoader && <LoaderSc />} {/* Display the loading screen */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image1={product.imageURL || "No image"}
            image2={product.imageURL || "No image"}
            title={product.title || "No Name"}
            code={product.desc || "No Description"}
            price={product.price || "No Price"}
            collectionName="Kidswear" // Pass the collection name
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Kidswear;
