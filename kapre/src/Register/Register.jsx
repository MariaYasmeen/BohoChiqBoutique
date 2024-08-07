import React, { useState } from 'react';
import { auth } from "../Utils/firebaseConfig";
import LoaderSc from '../Components/LoaderSc';
import { signInWithEmailAndPassword } from 'firebase/auth';  // Correct import
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";

function SignIn() {
  // State variables
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");  // Changed variable name to email
  const [password, setPassword] = useState("");  // Changed variable name to password
  const [error, setError] = useState(null); // Added error state

  const navigate = useNavigate();

  // Sign in function
  const signIn = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors

      // Sign in using Firebase
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', result.user);

      // Save user info to localStorage
      localStorage.setItem("user", JSON.stringify(result.user));

      // Navigate to home or another page on successful sign-in
      navigate("/");

    } catch (error) {
      console.log('Sign-in error:', error);

      // Update error state
      setError("Invalid email or password. Please try again.");

    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <div className="signupcss"> {/* Updated class name */}
      {loading && <LoaderSc />} {/* Render Loader conditionally */}
      <main className="signin-css"> {/* Updated class name */}
        <form onSubmit={signIn}>
          <h1 className="h6 mb-3 fw-normal">Please Sign In</h1>

          {/* Show error message */}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-floating">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="form-control" 
              id="emailInput"
              placeholder="name@example.com" 
              aria-describedby="emailHelp"
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating">
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="form-control"
              id="passwordInput"
              placeholder="Password" 
              aria-describedby="passwordHelp"
            />
            <label htmlFor="passwordInput">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input 
              className="form-check-input" 
              type="checkbox" 
              value="remember-me" 
              id="flexCheckDefault" 
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Link to register page */}
          <h6 style={{ marginTop: "20px" }}>
            Don't have an account? <Link to='/account/register'>Sign Up</Link>
          </h6>

          <p className="mt-5 mb-3 text-body-secondary">© 2024 Developed by Maria Yasmeen</p>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
