
import React, { Children } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
import AddProd from './Admin/AddProd';
import EditProd from './Admin/EditProd';
import DBState from './Context/DBState';
import AdminDashboard from './Admin/AdminDashboard';
import Account from "./Register/Account";
import './App.css';
import SignIn from './Register/SignIn';
import { Cart } from './Pages/Cart';


function App() {
  return (
    <>
    <DBState>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product />} />
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
          }/>
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
          <Route path="/kids" element={<KidsPage />} />
        </Routes>
      </BrowserRouter>      
    </React.StrictMode>
    </DBState>
    </>
  );
}

export default App;

//user
export const UserRoute = ({children}) => {
  const user = localStorage.getItem("user")
  if(user){
    return children
  }
  else {
    return <Navigate to={"/signin"}/>
  }
}

//admin
const AdminRoute = ({children}) => {
  const admin = JSON.parse(localStorage.getItem("user"))
  if(admin.user.email === "mariyayasmeen000@gmail.com"){
  return children
  }
    else return <Navigate to={"/signin"}/> 
  }
