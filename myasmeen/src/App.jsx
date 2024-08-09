// App.jsx

import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bridals from "./Pages/Bridals";
import Home from "./Pages/Home";
import Menswear from "./Pages/Menswear";
import Jewelry from "./Pages/Jewelry";
import { Product } from "./Components/Product";
import Register from "./Register/Register";
import { AdminDashboard } from "./Admin/AdminDashboard";
import SignIn from "./Register/SignIn";
import AddNewCollection from "./FBDatabase/AddNewCollection";
import Kidswear from "./Pages/Kidswear";
import './App.css';
import UpdateCollection from "./FBDatabase/UpdateCollection";
import { Cart } from "./Pages/Cart";
import Account from "./Register/Account";
import { MyWishList } from "./Pages/MyWishList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kidswear" element={<Kidswear />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/mywishlist" element={<MyWishList />} />
        <Route path="/admindashboard/addnewcollection" element={<AddNewCollection />} />
        <Route path="/admindashboard/updatecollection" element={
         <AdminRoute>
         <UpdateCollection />
       </AdminRoute>
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admindashboard" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />
        <Route path="/cart" element={
          <UserRoute>
            <Cart />
          </UserRoute>
        } />
        <Route path="/menswear" element={<Menswear />} />
        <Route path="/product/:title" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// UserRoute component
export const UserRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

// AdminRoute component
export const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === "mariyayasmeen000@gmail.com") {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}
