import "./Login.css";
import React from "react";
//hooks in react
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
//For user authentication
import { auth } from "../firebase";

function Login() {
  //Navigate is used to navigate to a particular page.
  const navigate = useNavigate();
  //State of user email and password is set to empty string.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //firebase
    auth
      .signInWithEmailAndPassword(email, password)

      .then((auth) => {
        console.log(auth.user.auth);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //creates a new user with email and password
        console.log(auth);
        if (auth) {
          navigate("/"); //once created ac moves to homepage
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://th.bing.com/th/id/R.217d03013c51c76db7cf0e9b50154d4b?rik=%2bIHXwrO3Il%2biZw&riu=http%3a%2f%2flogo-logos.com%2fwp-content%2fuploads%2f2016%2f12%2fAmazon_logo.png&ehk=7l4%2bkNvbCTrXLwiCGyH6iX7O5JHdUjlF%2fKRCjwG2o2o%3d&risl=&pid=ImgRaw&r=0"
          alt="amazonLogo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <h1 style={{ textAlign: "center" }}>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>

        <p>
          <input type="checkbox" />
          By signing-in you agree to the FAKE AMAZON Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
