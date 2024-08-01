import React, { useContext } from 'react';
import { useState } from 'react';
import DBContext from '../Context/DBContext';
import { auth } from '../Firebase/FirebaseConfig';  // Removed fireDB as it's not used
import { Loader } from '../Components/Loader';
import { signInWithEmailAndPassword } from 'firebase/auth';  // Correct import
import { useNavigate } from 'react-router-dom';
import "./Register.css";

function SignIn() {

  const context = useContext(DBContext);
  const { Loading, setLoading } = context;

  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();  // Prevent default form submission

    try {
      setLoading(true); // Start loading
      const result = await signInWithEmailAndPassword(auth, mail, psw);
      console.log('User signed in:', result.user);
      setLoading(false); // Stop loading
      localStorage.setItem("user", JSON.stringify(result))
      navigate("/"); // Navigate to home or another page on successful sign-in
    } 
    catch (error) {
      console.log('Sign-in error:', error);
      setLoading(false); // Stop loading on error
    }
  }

  return (
    <div className="signupcss"> {/* Updated class name */}
      {Loading && <Loader />} {/* Render Loader conditionally */}
      <main className="signin-css"> {/* Updated class name */}
      
        <form onSubmit={signIn}>
          <h1 className="h6 mb-3 fw-normal">Please Sign In</h1>

          <div className="form-floating">
            <input 
              type="email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="email"
              required
              className="form-control" 
              id="mailInput"
              placeholder="name@example.com" 
            />
            <label htmlFor="mailInput">Email address</label>
          </div>
          <div className="form-floating">
            <input 
              type="password"
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
              name="password"
              required
              className="form-control"
              id="pswInput"
              placeholder="Password" 
            />
            <label htmlFor="pswInput">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit" disabled={Loading}>
            {Loading ? "Signing In..." : "Sign In"}
          </button>
          <h6 style={{marginTop:"20px"}}>Create a new account<a href='/signup'>SignUp</a> </h6>

          <p className="mt-5 mb-3 text-body-secondary">© 2024 Developed by Maria Yasmeen</p>
        </form>
      </main>
    </div>
  );
};

export default SignIn;
