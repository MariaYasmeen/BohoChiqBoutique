import React from "react";
import "./Pages.css";

export const Product = () => {
    return (
        <>
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
<div className="cont2" style={{width:"50%"}}> This is container 1</div>
 
</div>
        </>
    )
}