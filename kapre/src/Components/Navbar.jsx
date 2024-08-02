import React from "react";
import { Link } from "react-router-dom";
import "./Components.css"
import { useSelector } from "react-redux";
export const Navbar = () =>{

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

const cartItems = useSelector((state) => state.cart)
const wishlistItems = useSelector((state) => state.wishlist);

    return (
        <>
          <div className=" d-flex justify-content-center align-items-center" style={{ backgroundColor: "black" }}>
      <div className=" mx-5">
        <Link to="" className="text-decoration-none" style={{ color: "white" }}>
          Free Shipping Over PKR 5000
        </Link>
      </div>
      <div className=" mx-5">
        <Link to="" className="text-decoration-none" style={{ color: "white" }}>
         Contact Us: +9221111627422
        </Link>
      </div>
    </div>

  <div className="fa-iconcss">
  <div className="row align-items-center justify-content-between ">
    <div className="col text-center ">
   
      
      <Link to="#" className="text-decoration-none" ><i class="fa-solid fa-magnifying-glass"></i>
      </Link>
    </div>
    <div className="col text-center">
      <Link to="/" className="text-decoration-none text-center " style={{ color: "black", fontSize: "43px", letterSpacing:"2px" }}>
        M.YASMEEN
      </Link>
    </div>
    <div className="col text-center" >
     <Link to="#" className="text-decoration-none" ><i class="fa-sharp fa-solid fa-truck-fast"></i>
    </Link>
    <Link to="/wishlist" className="text-decoration-none position-relative" ><i class="fa-regular fa-heart"></i>
    <span className="cart-badge">{wishlistItems.length}</span>
     </Link>
    

{user?.user?.email !== "mariyayasmeen000@gmail.com" ? (
  <Link to="/cart" className="text-decoration-none position-relative">
    <i className="fa-sharp fa-solid fa-cart-shopping"></i>
    <span className="cart-badge">{cartItems.length}</span>
</Link>
 ) : "" }     
     <Link to="/account" className="text-decoration-none" ><i class="fa-regular fa-user"></i>
      </Link>
     
    </div>
  </div>
</div>


<div class="container" style={{color:"black", marginBottom:"8px"}}>
    <header class="d-flex justify-content-center " >
      <ul class="nav  ulcss nav-links"  >
        <li class=" "><Link to="/product" class="nav-link">unstitched</Link>
        <div className="mega-box " style={{left: "-210px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="luxpt.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Graphics</Link>
                      </li>
                      <li>
                        <Link to="#">Vectors</Link>
                      </li>
                      <li>
                        <Link to="#">Business </Link>
                      </li>
                      <li>
                        <Link to="#">Custom </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <Link to="#">Graphics</Link>
                   </li>
                   <li>
                     <Link to="#">Vectors</Link>
                   </li>
                   <li>
                     <Link to="#">Business </Link>
                   </li>
                   <li>
                     <Link to="#">Custom </Link>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>
        </li>

        
        <li class="nav-item"><Link to="/signup" class="nav-link">ready to wear</Link>
        <div className="mega-box"  >
                <div className="content" >
                  <div className="row" style={{width:"20%"}}>
                    <img src="unstit.jpg"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links"   style={{left: "-160px"}} >
                      <li>
                        <Link to="#">M.Prints</Link>
                      </li>
                      <li>
                        <Link to="#">Mbroidered</Link>
                      </li>
                      <li>
                        <Link to="#">Linen</Link>
                      </li>
                      <li>
                        <Link to="#">Chiffon </Link>
                      </li>
                    </ul>
                  </div>
                  </div>
                  </div></li>
        <li class="nav-item"><Link to="" class="nav-link">kids</Link>
        <div className="mega-box" >
                <div className="content" >
                  <div className="row" >
                    <img src="kids.jpg"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links"  style={{left: "-180px"}} >
                      <li>
                        <Link to="#">Luxury Formals</Link>
                      </li>
                      <li>
                        <Link to="#">Mommy & Me</Link>
                      </li>
                      <li>
                        <Link to="#">Luxury Pret</Link>
                      </li>
                      <li>
                        <Link to="#">View </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                     <ul className="mega-links">
                      <li>
                        <Link to="#">Personal</Link>
                      </li>
                      <li>
                        <Link to="#">Business </Link>
                      </li>
                      <li>
                        <Link to="#">Mobile </Link>
                      </li>
                      <li>
                        <Link to="#"> Marketing</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                   
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Site </Link>
                      </li>
                      <li>
                        <Link to="#"> Hosting</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy </Link>
                      </li>
                      <li>
                        <Link to="#">Website </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        </li>
        <li class="nav-item"><Link to="/menswear" class="nav-link">menswear</Link>
        <div className="mega-box" >
                <div className="content" >
                  <div className="row"   style={{width:"30%"}}>
                    <img src="dad.jpg"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links"  style={{left: "-180px"}} >
                      <li>
                        <Link to="#">Luxury Formals</Link>
                      </li>
                      <li>
                        <Link to="#">Mommy & Me</Link>
                      </li>
                      <li>
                        <Link to="#">Luxury Pret</Link>
                      </li>
                      <li>
                        <Link to="#">View </Link>
                      </li>
                    </ul>
                  </div>
                  </div>
                  </div>
        </li> 
        <li class="nav-item"><Link to="#" class="nav-link">couture</Link>
        <div className="mega-box" style={{left: "-10px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="luxury.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Graphics</Link>
                      </li>
                      <li>
                        <Link to="#">Vectors</Link>
                      </li>
                      <li>
                        <Link to="#">Business </Link>
                      </li>
                      <li>
                        <Link to="#">Custom </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <Link to="#">Graphics</Link>
                   </li>
                   <li>
                     <Link to="#">Vectors</Link>
                   </li>
                   <li>
                     <Link to="#">Business </Link>
                   </li>
                   <li>
                     <Link to="#">Custom </Link>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>
        </li> 
        <li class="nav-item"><Link to="#" class="nav-link">bridals</Link>
        <div className="mega-box" style={{left: "-210px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="slider5.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Graphics</Link>
                      </li>
                      <li>
                        <Link to="#">Vectors</Link>
                      </li>
                      <li>
                        <Link to="#">Business </Link>
                      </li>
                      <li>
                        <Link to="#">Custom </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <Link to="#">Graphics</Link>
                   </li>
                   <li>
                     <Link to="#">Vectors</Link>
                   </li>
                   <li>
                     <Link to="#">Business </Link>
                   </li>
                   <li>
                     <Link to="#">Custom </Link>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>
        </li>
         <li class="nav-item"><Link to="#" class="nav-link">jewelry</Link> <div className="mega-box" style={{left: "-21px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="perf.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <Link to="#">Graphics</Link>
                      </li>
                      <li>
                        <Link to="#">Vectors</Link>
                      </li>
                      <li>
                        <Link to="#">Business </Link>
                      </li>
                      <li>
                        <Link to="#">Custom </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <Link to="#">Graphics</Link>
                   </li>
                   <li>
                     <Link to="#">Vectors</Link>
                   </li>
                   <li>
                     <Link to="#">Business </Link>
                   </li>
                   <li>
                     <Link to="#">Custom </Link>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>    
         </li>
          
        <li class="nav-item"><Link to="#" class="nav-link">sale</Link></li>
        {user?.user?.email === "mariyayasmeen000@gmail.com" && (
        <>
          <li className="nav-item">
            <Link to="/admindashboard" className="nav-link">Dashboard</Link>
          </li>
        </>
        )}
       
      </ul>
    </header>
  </div>

        </>
    )
}