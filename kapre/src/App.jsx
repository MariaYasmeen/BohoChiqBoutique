import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from "./Components/Header";

import './App.css';

function App() {
  return (
    <>
      <Header />
  


<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/1.jpg" className="d-block w-100 img-fluid" alt="..." />
    </div>
  
    <div className="carousel-item">
      <img src="/2.jpg" className="d-block w-100 img-fluid" alt="..." />
    </div>
   
    <div className="carousel-item">
      <img src="/d2.webp" className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="/new.jpg" className="d-block w-100 img-fluid" alt="..." />
    </div>
   
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default App;
