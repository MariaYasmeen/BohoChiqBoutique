import React from "react";
import { Navbar } from "../Components/Navbar";
import { Cards } from "../Components/cards";
import { Footer } from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { delFromCart, addToCart } from "../Redux/CartSlice";

export const Home = () =>{
const dispatch = useDispatch();
const cartItem = useSelector((state)=> state.cart)

  const addCart = () =>{
    dispatch(addToCart("Pilot uniform"));
  }
  const delCart = () =>{
    dispatch(delFromCart("Pilot uniform"));
  }
  console.log(cartItem)
    return (
        <>
        <Navbar />

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/slider3.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item active">
      <img src="/slider1.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/slider5.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/slider4.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/slider5.png" className="d-block w-100 img-fluid" alt="..." />
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Cards />
<Footer/>
        </>
    )
}