import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Navbar.css'; // Import the CSS file for styling

export const Navbar = () => {

  let user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.error('Error parsing user from local storage:', error);
    user = null;
  }
  console.log('User:', user);
 const cartItems = useSelector((state) => state.cart)
const wishlistItems = useSelector((state) => state.wishlist);

  return (

    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="mx-5">
          <Link
            to=""
            className="text-decoration-none"
            style={{ color: "white" }}
          > Free Shipping Over PKR 5000
          </Link>
        </div>
        <div className="mx-5">
          <Link
            to=""
            className="text-decoration-none"
            style={{ color: "white" }}
          >Contact Us: +9221111627422
          </Link>
        </div>
      </div>

      <div className="fa-iconcss">
        <div className="row align-items-center justify-content-between">
          <div className="col text-center">
            <Link to="#" className="text-decoration-none">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
          <div className="col text-center">
            <Link
              to="/"
              className="text-decoration-none text-center"
              style={{ color: "black", fontSize: "40px", letterSpacing: "2px" }}
            >
              M.YASMEEN
            </Link>
          </div>
          <div className="col text-center fa-iconcss">
            <Link to="#" className="text-decoration-none">
              <i className="fa-sharp fa-solid fa-truck-fast"></i>
            </Link>
            {user && user.email !== "mariyayasmeen000@gmail.com" ? (
        <Link to="/mywishlist" className="text-decoration-none position-relative">
            <i className="fa-regular fa-heart"></i>
            <span className="cart-badge">{wishlistItems.length}</span>
        </Link>
      ) : (
        "" 
      )}
      
            {user && user.email !== "mariyayasmeen000@gmail.com" ? (
        <Link to="/cart" className="text-decoration-none position-relative">
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          <span className="cart-badge">{cartItems.length}</span>
        </Link>
      ) : (
        "" 
      )}

            <Link to="/account/*" className="text-decoration-none">
              <i className="fa-regular fa-user"></i>
            </Link>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg Navbarcss"
        aria-label="Tenth navbar example"
        style={{ color: "black", height: "35px" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul className="navbar-nav nav ulcss nav-links">
              <li className="nav-item">
                <Link to ="" className="nav-link active" aria-current="page"   >
                  unstitched
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to =""
                  className="nav-link dropdown-toggle"
                    
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ready to wear
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      <img src="./2.jpg" style={{ width: "250px" }} alt="Dropdown Item" />
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to ="/kidswear" className="nav-link active" aria-current="page" >
                  kids
                </Link>
              </li>
              <li className="nav-item">
                <Link to ="/menswear" className="nav-link active" aria-current="page" >
                  menswear
                </Link>
              </li>
              <li className="nav-item">
                <Link to ="" className="nav-link active" aria-current="page"   >
                  couture
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to ="/bridal"
                  className="nav-link dropdown-toggle" 
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bridal
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      <img src="./51.png" style={{ width: "250px" }} alt="Dropdown Item" />
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to ="" className="nav-link">jewelry</Link>
              </li>
    
              <li className="nav-item dropdown">
                <Link to =""
                  className="nav-link dropdown-toggle"
                    
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SALE
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      <img src="./3.jpg" style={{ width: "250px" }} alt="Dropdown Item" />
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              {user?.email === "mariyayasmeen000@gmail.com" && (
        <li className="nav-item">
          <Link to="/admindashboard" className="nav-link">Dashboard</Link>
        </li>
      )}
        
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
