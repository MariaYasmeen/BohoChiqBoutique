
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { KidsPage } from './Pages/KidsPg';
import SignUp from './Register/SignUp';
//https://codepen.io/suez/pen/PwKZwO
//https://codepen.io/ashthornton/pen/KRQbMO
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import './App.css';


function App() {
  return (
    <>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/kids" element={<KidsPage />} />
        </Routes>
      </BrowserRouter>      
    </React.StrictMode>
    </>
  );
}

export default App;
