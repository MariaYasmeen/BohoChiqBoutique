import React ,{ useContext } from 'react';
import { useParams } from 'react-router-dom';
import DBContext from '../Context/DBContext';
import {Navbar} from "../Components/Navbar";
import "./Pages.css";


export const Product = () => {
  const { id } = useParams();
  const { product } = useContext(DBContext);

   // Find the product with the matching ID
   const item = product.find((prod) => prod.id === id);

   if (!item) {
     return <div>Product not found</div>;
   }
 
   const { title, price, desc, imageURL } = item;
 
    return (
        <>
        <Navbar/>
<div className="productcss">
<div className="con1">
      <div className="imgcontainer" >
        
        <ul className="thumbnails">
          <li><a href="#slide1"><img src={imageURL} alt={title} /></a></li>
          <li><a href="#slide2"><img  src={imageURL} alt={title} /></a></li>
          <li><a href="#slide3"><img  src={imageURL} alt={title} /></a></li>
        </ul>

        <ul className="slides" >
          <li id="slide1" ><img src={imageURL} alt={title} /></li>
          <li id="slide2"><img  src={imageURL} alt={title}/></li>
          <li id="slide3"><img  src={imageURL} alt={title}  /></li>
        </ul>

      </div>
    </div>
<div className="cont2" >
<h3>{title}</h3>
<p>JS-026-GOLD | IN STOCK</p>

<h7>SAVE 20%</h7>
<h5>PKR {price}</h5>
<p>GST Inclusive</p>
<div className="cont2btns" >
<button style={{backgroundColor:"black", color:"white"}}>ADD TO CART</button>
<button>Add to  Wishlist</button>
</div>
<p>Disclaimer: Product color may vary slightly due to photographic lighting or your device settings.</p>
 <h4>Description</h4>
 <p>{desc}</p>
 </div>
 
</div>
        </>
    )
}