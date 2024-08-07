// src/components/Pages.jsx

import React from "react";
import fecthCollData from "../Utils/fetchCollData";
import { ProductCard } from "../Components/ProductCard";
import { Navbar } from "../Navbar/Navbar";
import LoaderSc from "../Components/LoaderSc";
import { Helmet } from "react-helmet-async";

const Menswear = () => {
  const { data: products, loading, error } = fecthCollData("products");

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
     <Helmet>
        <title>Menswear | M.Yasmeen</title>
      </Helmet>
    <Navbar />
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
          collectionName="products" // Pass the collection name
        />
      ))}
    </div>
    <Navbar />
    </>
  );
};

export default Menswear;
