// src/components/Pages.jsx

import React from "react";
import fecthCollData from "../Utils/fetchCollData";
import { ProductCard } from "../Components/ProductCard";
import { Navbar } from "../Navbar/Navbar";
import { Helmet } from "react-helmet-async";
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
     <Helmet>
        <title>Kidswear | M.Yasmeen</title>
      </Helmet>
      <Navbar />
      {showLoader && <LoaderSc />} {/* Display the loading screen */}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image1={product.image1 || "No image"}
            image2={product.image2 || "No image"}
            title={product.title || "No Name"}
            code={product.code || "No Description"}
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
