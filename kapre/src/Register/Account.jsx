import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/FirebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Routes, Route, Link } from 'react-router-dom'; // Import Routes and Route
import { Loader } from '../Components/Loader';
import DBContext from '../Context/DBContext';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { Navbar } from '../Components/Navbar';
import "./Register.css"

const Account = () => {
  const { Loading, setLoading } = useContext(DBContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setLoading]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      setUser(null);
      localStorage.clear("user")
      navigate('/account/signup');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="account-page">
      {Loading && <Loader />}
      {user ? (
        <div className="user-info">
          <h2>Welcome, {user.displayName || user.email}!</h2>
          <p>Email: {user.email}</p>
          <button className="btn btn-danger" onClick={handleLogout} disabled={Loading}>
            {Loading ? 'Logging Out...' : 'Logout'}
          </button>
        </div>
      ) : (
        <div className="auth-options">
          <h4>So glad you are here.</h4>
          <SignUp />
        </div>
      )}

    
    </div>
    </>
  );
};

export default Account;
