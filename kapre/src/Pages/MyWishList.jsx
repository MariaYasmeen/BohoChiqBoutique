import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export const MyWishList  = () => {

    const navigate = useNavigate();
    const handleBackToShop = () => {
      navigate(-1); 
    };
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
      }, [wishlistItems]);
      

      
return (
    <>
    <Navbar />


    <Footer/>

    </>
)
}