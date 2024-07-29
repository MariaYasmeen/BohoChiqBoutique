import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
    <div style={{marginTop:"23px"}}>
    
    <center><h3 >Featured Designs</h3></center>
    <div className="slider-container" >
      <Slider {...settings}>
        <div>
        <img src="/lux.png" className="d-block w-100 img-fluid" alt="..." />
         
        <a className="nav-link" href="#"><h3>LUXURY FORMALS</h3></a>
        </div>
        <div>
        <img src="/3.jpg" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>LUXURY PRET</h3></a>
        </div>
        <div>
        <img src="/kids.png" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>KIDS</h3></a>
        </div>
        <div>
        <img src="/men.png" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>MENSWEAR</h3></a>
        </div>
        <div>
        <img src="/mom.png" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>MOMMY & ME</h3></a>
        </div>
        <div>
        <img src="/unstit.png" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>UNSTITCHED</h3></a>
        </div>
        <div>
        <img src="/jew.png" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>JEWELRY</h3></a>
        </div>
        <div>
        <img src="/perf.png" className="d-block w-100 img-fluid" alt="..." />
        <a className="nav-link" href="#"><h3>PERFUMES</h3></a>
        </div>
              </Slider>
    </div>
    </div>
    );
}

export default AutoPlay;
