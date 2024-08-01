import React, { useContext } from 'react';
import { useState } from 'react';
import DBContext from '../Context/DBContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../Firebase/FirebaseConfig';  // Ensure correct import
import { Loader } from '../Components/Loader';
import { addDoc, collection } from 'firebase/firestore';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");
  const navigate = useNavigate();

  const context = useContext(DBContext);
  const { Loading, setLoading } = context

  const signUp = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log(name, mail, psw);

    try {
      setLoading(true); // Start loading
      const userD = await createUserWithEmailAndPassword(auth, mail, psw);
      const user = {
        name: name,
        uid: userD.user.uid,
        email: userD.user.email,
      };
      navigate("/"); // Navigate to home or another page on successful sign-in

      // Add a new document in collection "users"
      const userRef = collection(fireDB, "users"); // Collection reference
      await addDoc(userRef, user); // Correct usage of addDoc

      setName("");
      setMail("");
      setPsw("");

      console.log(userD);
      setLoading(false); // Stop loading
    } catch (error) {
      console.log(error);
      setLoading(false); // Stop loading on error
    }
  }

  return (
    <div className="signupcss">
      <main className="signupcss">
        <form onSubmit={signUp}>
          <h1 className="h6 mb-3 fw-normal">Please sign up</h1>
          <div className="form-floating">
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
              className="form-control"
              id="nameInput"
              placeholder="Ahmed Sher" 
            />
            <label htmlFor="nameInput">Full Name</label>
          </div>
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
            {Loading ? "Signing up..." : "Sign up"}
          </button>
          <h6 style={{marginTop:"20px"}}>Alreay have an account?<a href='/signin'>SignIn</a> </h6>

          <p className="mt-5 mb-3 text-body-secondary">© 2024 Developed by Maria Yasmeen</p>
        </form>
      </main>
      
    </div>
  );
};

export default SignUp;
