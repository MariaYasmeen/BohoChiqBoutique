import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 7000,
    cssEase: "linear"
  };
  return (
    <>
    <center><h3 style={{marginTop:"30px"}}>Featured Designs</h3></center>
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img src="/lux.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>LUXURY FORMALS</h3>
        </div>
        <div>
        <img src="/luxpret.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>LUXURY PRET</h3>
        </div>
        <div>
        <img src="/kids.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>KIDS</h3>
        </div>
        <div>
        <img src="/men.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>MENSWEAR</h3>
        </div>
        <div>
        <img src="/mom.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>MOMMY & ME</h3>
        </div>
        <div>
        <img src="/unstit.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>UNSTITCHED</h3>
        </div>
        <div>
        <img src="/jewl.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>JEWELRY</h3>
        </div>
        <div>
        <img src="/perf.png" className="d-block w-100 img-fluid" alt="..." />
          <h3>PERFUMES</h3>
        </div>
              </Slider>
    </div>
    </>
    );
}

export default AutoPlay;
