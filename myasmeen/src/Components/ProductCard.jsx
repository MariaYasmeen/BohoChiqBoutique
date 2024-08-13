import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux"; 
import { addToWishlist, delFromWishlist } from "../Redux/WishlistSlice";
import useFetchCollection from "../Utils/useFetchCollection";
import { AddInWishList } from "../Functions/AddInWishList";
import { useTitle } from "../Context/TitleContext";
import ButtonFlip from "../Animations/ButtonFlip";


export const ProductCard = ({
  id,
  image1,
  image2,
  title,
  code,
  price,
  collectionName,
}) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get wishlist from Redux store
  const wishlist = useSelector((state) => state.wishlist);

  // Determine if the item is in the wishlist
  const isInWishlist = wishlist.some((item) => item.id === id);

  const { data: products, loading, error } = useFetchCollection(collectionName);
  const item = products.find((prod) => prod.id === id);

  const { setTitle } = useTitle(); // Get the setTitle function from the context

  useEffect(() => {
    setTitle(`${title} - M.Yasmeen`); // Set the page title dynamically
  }, [title, setTitle]);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(delFromWishlist(item)); // Remove item from Redux store
    } else {
      dispatch(addToWishlist(item)); // Add item to Redux store
    }
    AddInWishList(item, wishlist, dispatch); // Update local storage and Redux
  };

  const handleQuickView = () => {
    navigate(`/product/${slug}`, { state: { collectionName } });
  };

  return (
    <>
      <Helmet>
        <meta name="description" content={`See new Collection for Men.`} />
      </Helmet>
      <div
        className="product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-image">
          <Link to={`/product/${slug}`} state={{ collectionName }}>
            <img src={isHovered ? image2 : image1} alt={title} />
            {isHovered && (
               <ButtonFlip frontText="Customer Favorite" backText="Quick View" className="buy-button" onClick={handleQuickView}/>
              
            )}
          </Link>

          {/* Icon on the top right corner */}
          <button className="wishlist-button" onClick={toggleWishlist}>
            <i
              className={`fa-heart icon-top-right ${
                isInWishlist ? "fa-solid" : "fa-regular"
              }`}
            ></i>
          </button>

          {/* Badge on the top left corner */}
          <span className="badge-top-left">NEW</span>
        </div>
        <div className="product-details">
          <h2>{title}</h2>
          <div className="product-info">
            <p>{code}</p>
            <p className="price">PKR {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
