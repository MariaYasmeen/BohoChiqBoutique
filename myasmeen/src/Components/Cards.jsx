import React from "react";
import AutoPlay from "./Autoplay";
import Image from "../ImgSliders/Image";

export const Cards = () => {
    return (
        <>
<div className="row featurette centerectextimg">
      <div className="col-md-7 textcenter">
        <h2 className="featurette-heading  fw-normal lh-1">Where Fashion Journey Begins ...</h2>
        <p className="lead text-center">Why settle for ordinary when you can have extraordinary? Our everyday essentials are designed to bring style and comfort to your daily routine. Start your fashion adventure today and explore the endless possibilities. Transform your look and make a statement wherever you go.</p>
      </div>
      <div className="col-md-5 " style={{paddingTop:"10px"}}>
      <Image
              imageSrc="/51.png"
                              heading="Amazing Place"
                    subheading="Discover the beauty"
                    buttonText="Learn More"
                  />
      </div>
    </div>
    <div className="row featurette centerectextimg">

      <div className="col-md-5" style={{paddingBottom:"7px"}}>
      <Image
              imageSrc="/52.png"
                              heading="Amazing Place"
                    subheading="Discover the beauty"
                    buttonText="Learn More"
                  />
      </div>
      <div className="col-md-7 textcenter">
        <h2 className="featurette-heading fw-normal lh-1 text-body-primary">Embrace the Latest Trends</h2>
        <p className="lead text-center">
        Create a wardrobe that truly reflects your personality with our versatile pieces. Mix and match to curate a style that’s uniquely yours. From bold patterns to classic silhouettes, our collections offer endless possibilities for self-expression.
       </p>
      </div>
    </div>




        <div className="mariabslider" style={{ marginTop:"50px"}} >
            <div className="d-md-flex flex-md-equal" >
                    <div style={{ marginTop:"20px" , padding:"7px"}}>
         <Image
        imageSrc="/man.webp"
        heading="Amazing Place"
        buttonText="Learn More"
      /></div>
             <div style={{ marginTop:"20px" , padding:"7px"}}   > 
               <Image
              imageSrc="/daddy.webp"
                              heading="Amazing Place"
                    subheading="Discover the beauty"
                    buttonText="Learn More"
                  />
               </div>
               </div>
                </div>
                <Image
                style={{ padding:" 20px 35px 10px 35px" }} 
        imageSrc="kidswear.webp"
        heading="Amazing Place"
        subheading="Discover the beauty"
        buttonText="Learn More"
      />
                <div className="mariabslider"  >
                <div className="d-md-flex flex-md-equal" >
                        <div  style={{ marginTop:"20px" , padding:"7px"}}
                        > <Image
                        imageSrc="/mariab1.webp"
                        heading="Amazing Place"
                        subheading="Discover the beauty"
                        buttonText="Learn More"
                      />
                   </div>
                   <div  style={{ marginTop:"20px" , padding:"7px"}}
                        >  <Image
                        imageSrc="/mariab2.webp"
                        heading="Amazing Place"
                        subheading="Discover the beauty"
                        buttonText="Learn More"
                      />
                   </div>
                         
                   
                   </div>
                    </div>
        </>
    );
};
