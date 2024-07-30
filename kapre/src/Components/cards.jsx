import React from "react";
import Image from "../ImgSliders/Image";

export const Cards = () => {
    return (
        <>
        <div className="mariabslider" style={{ marginTop:"50px"}} >
            <div className="d-md-flex flex-md-equal" >
                    <div style={{ marginTop:"20px" , padding:"15px"}}
                    >
                         <Image
        imageSrc="/man.webp"
        heading="Amazing Place"
        buttonText="Learn More"
      />
                        
                      </div>
               <div style={{ marginTop:"20px" , padding:"15px"}}   > 
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
                <div className="mariabslider" style={{ height:"50%"}} >
                <div className="d-md-flex flex-md-equal" >
                        <div  style={{ marginTop:"20px" , padding:"15px"}}
                        > <Image
                        imageSrc="/mariab1.webp"
                        heading="Amazing Place"
                        subheading="Discover the beauty"
                        buttonText="Learn More"
                      />
                   </div>
                   <div  style={{ marginTop:"20px" , padding:"15px"}}
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
