import React from "react"
import ProductCard from "../ImgSliders/ProductCard"
import { Navbar } from "../Components/Navbar"
import "./Pages.css"

export const Menswear = () =>{
    return (
        <>
        <Navbar/>
        <div className=" product-grid">
        <ProductCard 
        image1={"/cour.webp"}
        image2={"/cour1.webp"}
        title="3 Piece Embroidered Frock"
        code="SF-EF22-43R1"
        price="36,890"
      />
        <ProductCard 
        image1={"/cour.webp"}
        image2={"/cour1.webp"}
        title="3 Piece Embroidered Frock"
        code="SF-EF22-43R1"
        price="36,890"
      />
      <ProductCard 
      image1={"/cour.webp"}
      image2={"/cour1.webp"}
      title="3 Piece Embroidered Frock"
      code="SF-EF22-43R1"
      price="36,890"
    />
    <ProductCard 
    image1={"/cour.webp"}
    image2={"/cour1.webp"}
    title="3 Piece Embroidered Frock"
    code="SF-EF22-43R1"
    price="36,890"
  />
      <ProductCard 
      image1={"/cour.webp"}
      image2={"/cour1.webp"}
      title="3 Piece Embroidered Frock"
      code="SF-EF22-43R1"
      price="36,890"
    />
    <ProductCard 
    image1={"/cour.webp"}
    image2={"/cour1.webp"}
    title="3 Piece Embroidered Frock"
    code="SF-EF22-43R1"
    price="36,890"
  />
        <ProductCard 
        image1={"/cour.webp"}
        image2={"/cour1.webp"}
        title="3 Piece Embroidered Frock"
        code="SF-EF22-43R1"
        price="36,890"
      />
        </div>
       
        </>
    )
}
