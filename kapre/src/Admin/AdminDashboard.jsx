import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import { Outlet } from "react-router-dom";

export const AdminDashboard = () => {
    return (
        <>
        <Navbar />
        <div className="btncontainer">
            
      <Outlet /> 
            <div className="box1">
                <Link to="/admindashboard/addnewcollection">
                <button>Add Collection</button>
                </Link>
                </div>
                <div className="box1">
                <Link to="/admindashboard/updatecollection">
                <button>Update Collection</button>
                </Link>
                </div>
        </div>
        <Footer />
        </>
    )
}