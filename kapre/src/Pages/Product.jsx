import React from "react";
import {Navbar} from "../Components/Navbar";
import "./Pages.css";
export const Product = () => {
    return (
        <>
        <Navbar/>
<div className="productcss">
<div className="con1">
      <div className="container" >
        
        <ul className="thumbnails">
          <li><a href="#slide1"><img src="/cour.webp" alt="Thumbnail 1" /></a></li>
          <li><a href="#slide2"><img  src="cour1.webp" alt="Thumbnail 2" /></a></li>
          <li><a href="#slide3"><img  src="cour2.webp" alt="Thumbnail 3" /></a></li>
        </ul>

        <ul className="slides" >
          <li id="slide1" ><img  src="/cour.webp" alt="Slide 1" /></li>
          <li id="slide2"><img  src="cour1.webp" alt="Slide 2" /></li>
          <li id="slide3"><img  src="cour2.webp" alt="Slide 3" /></li>
        </ul>

      </div>
    </div>
<div className="cont2" >
<h3>JSD-026-Gold</h3>
<p>JS-026-GOLD | IN STOCK</p>

<h7>SAVE 20%</h7>
<h5>PKR 7,390 | pkr 5, 912</h5>
<p>GST Inclusive</p>
<div className="cont2btns" >
<button style={{backgroundColor:"black", color:"white"}}>ADD TO CART</button>
<button>Add to  Wishlist</button>
</div>
<p>Disclaimer: Product color may vary slightly due to photographic lighting or your device settings.</p>
 <h4>Description</h4>
 <p>Witness the allure of sophisticated embellishments that enhance the designs from our signature jewelry creations handcrafted on 925 sterling silver with a gleaming 24K gold plated finish. Blending functionality with feminine grace, our M insignia encrusted with white zircons features a hanging round cultured.
White Zircons 24K Gold plated Round cultured Pearls in hanging Metal: Sterling Silver (925) Made in Pakistan <br/>
Disclaimer: Most of the pieces are individually Handcrafted with natural embellishments like semi-precious Stones. The natural material contains irregularities and therefore slight variations in color, shape, and size in the same article may occur and will not be considered damaged or defected.</p>
 
 </div>
 
</div>
        </>
    )
}