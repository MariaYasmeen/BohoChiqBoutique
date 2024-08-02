import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menswear } from './Pages/Menswear';
import SignUp from './Register/SignUp';
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import { Wishlist } from './Pages/WishList';
import AddProd from './Admin/AddProd';
import EditProd from './Admin/EditProd';
import DBState from './Context/DBState';
import { Cart } from './Pages/Cart';
import AdminDashboard from './Admin/AdminDashboard';
import Account from "./Register/Account";
import './App.css';
import SignIn from './Register/SignIn';

function App() {
  return (
    <DBState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/cart" element={
            <UserRoute>
              <Cart />
            </UserRoute>
          } />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path='/admindashboard' element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path='/addproduct' element={
            <AdminRoute>
              <AddProd />
            </AdminRoute>
          } />
          <Route path='/editproduct' element={
            <AdminRoute>
              <EditProd />
            </AdminRoute>
          } />
          <Route path="/menswear" element={<Menswear />} />
          <Route path="/product/:title" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </DBState>
  );
}

export default App;

// UserRoute component
export const UserRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

// AdminRoute component
const AdminRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin && admin.user.email === "mariyayasmeen000@gmail.com") {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}
