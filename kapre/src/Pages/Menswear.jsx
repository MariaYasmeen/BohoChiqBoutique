import React, { useContext } from 'react';
import ProductCard from '../ImgSliders/ProductCard';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import './Pages.css';
import DBContext from '../Context/DBContext';

export const Menswear = () => {
  const context = useContext(DBContext);
  const { product } = context;

  return (
    <>
      <Navbar />
      <div className="product-grid">
        {product.map((item, index) => {
          const { id, title, price, desc, imageURL } = item;
          return (
            <ProductCard
              key={index}
              id={id}
              image1={imageURL}
              image2={imageURL}
              title={title}
              code={desc}
              price={price}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};
