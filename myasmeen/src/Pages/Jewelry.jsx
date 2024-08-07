// src/components/Pages.jsx

import React from "react";
import fecthCollData from "../Utils/fetchCollData";
import { ProductCard } from "../Components/ProductCard";
import LoaderSc from "../Components/LoaderSc";

const Jewelry = () => {
  const { data: products, loading, error } = fecthCollData("jewelry");

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <Helmet>
        <title>Jewelry | M.Yasmeen</title>
      </Helmet>
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
          collectionName="jewelry" // Pass the collection name
        />
      ))}
    </div>
    </>
  );
};

export default Jewelry;
