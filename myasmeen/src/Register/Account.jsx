import React, { useEffect, useState } from 'react';
import { auth } from "../Utils/firebaseConfig";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Outlet } from 'react-router-dom';
import LoaderSc from '../Components/LoaderSc';
import { Navbar } from '../Navbar/Navbar';
import "./Register.css";
import Register from './Register';

const Account = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts

    // Initialize auth state listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  // Redirect if no user is logged in
  useEffect(() => {
    if (user === null) {
      navigate('/account/register');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
      navigate('/account/signin');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {loading && <LoaderSc />}
      <Outlet /> 
      <div className="account-page">
        {user ? (
          <div className="user-info">
            <h2>Welcome, {user.displayName || user.email}!</h2>
            <p>Email: {user.email}</p>
            <button className="btn btn-danger" onClick={handleLogout} disabled={loading}>
              {loading ? 'Logging Out...' : 'Logout'}
            </button>
          </div>
        ) : (
          <div className="auth-options">
            <h4>So glad you are here.</h4>
            <Register />
          </div>
        )}
      </div>
    </>
  );
};

export default Account;
