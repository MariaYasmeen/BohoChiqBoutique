import React, {useEffect} from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
     <Helmet>
        <title>WishList | M.Yasmeen</title>
      </Helmet>
    <Navbar />


    <Footer/>

    </>
)
}