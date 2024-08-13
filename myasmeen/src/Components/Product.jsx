import React from "react";
import useFetchCollection from "../Utils/useFetchCollection";
import { Link, useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LoaderSc from "./LoaderSc";
import { addToCart } from "../Redux/CartSlice";
import { addToWishlist, delFromWishlist } from "../Redux/WishlistSlice";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "./Footer";
import { useDispatch, useSelector } from 'react-redux';
import { AddInWishList } from "../Functions/AddInWishList";
import ProductSlider from "../ImgSliders/ProductSlider";

export const Product = () => {
  const { title } = useParams();
  const location = useLocation();
  const collectionName = location.state.collectionName;

  const dispatch = useDispatch();

  const { data: products, loading, error } = useFetchCollection(collectionName);

  const [wishlist, setWishlist] = React.useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const createSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const item = products.find((prod) => prod.title && createSlug(prod.title) === title);

  if (!item) {
    return <div>Product not found</div>;
  }

  const { image1, image2, image3, title: itemTitle, price, desc, id } = item;

  const isInWishlist = wishlist.some((product) => product.id === id);

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(delFromWishlist(item)); // Remove item from Redux store
    } else {
      dispatch(addToWishlist(item)); // Add item to Redux store
    }
    AddInWishList(item, wishlist, setWishlist, dispatch, addToWishlist, delFromWishlist); // Update local storage and Redux
  };

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    console.log("Product added to the cart");
  };
  const images = [
 ` ${image1}`,  
 ` ${image2}`,
  ` ${image3}`,
  ];

  return (
    <>
      <Helmet>
        <title>{itemTitle} - M.Yasmeen</title>
        <meta name="description" content={`Buy ${itemTitle} for PKR ${price}.`} />
      </Helmet>
      <Navbar />
      <div className="prodslidercss">
      <div className="prodimg">
         <ProductSlider images={images} />
         </div>
         <div className="proddesc">
   
        <div className="">
          <h4 style={{ fontWeight: "600" }}>{itemTitle}</h4>
          <p>JS-026-GOLD | IN STOCK</p>

          <h7 style={{ color: "darkred" }}>SAVE 20%</h7>
          <h5 style={{ fontWeight: "900", letterSpacing: "2px" }}>
            PKR {price}
          </h5>
          <p>GST Inclusive</p>
          <div className="cont2btns">
            <button 
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => handleAddCart(item)}
            >
              ADD TO BAG<i style={{marginLeft:"10px"}} class="fa-solid fa-bag-shopping"></i>
            </button>
            <button onClick={handleWishlist}>
              {isInWishlist ? (
                <>
                Remove from Wishlist 
                <i style={{marginLeft:"6px"}}  className={`fa-heart fa-solid`}/>

                </> 
                ) : (
                  <>
                  Add to Wishlist
                  <i style={{marginLeft:"6px"}}  className={`fa-heart fa-regular`}/>
                  </>
                )}
            </button>
            
          </div>
          <p>
            <span style={{ color: "darkred" }}>Disclaimer:</span> Product color
            may vary slightly due to photographic lighting or your device
            settings.
          </p>
          <p className="fa-iconcss"><i class="fa-solid fa-ship "></i>3 to 5 Working Days Nationwide Shipping</p>
          <hr />
          <h5 style={{ fontWeight: "900" }}>Description</h5>
          <p style={{ fontSize: "14px", letterSpacing: "1px" }}>{desc}</p>
          <h7>
            <Link to="" style={{ color: "black" }}>
              Click Here
            </Link>{" "}
            to get more details on our shipping & delivery policies.
          </h7>
        </div>
        </div>
        </div>
      <Footer />
    </>
  );
};
