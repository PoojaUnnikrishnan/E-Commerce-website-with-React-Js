//importing dependencies
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

//import components
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Login from "./components/Login";

// importing auth from firebase for user authentication
import { auth } from "./firebase";

//gets a publishable key from stripe to add payment via card
const promise = loadStripe(
  "pk_test_51KuyaPSCQaVx7HBe8OxRf2sNJR6frOJUsRuVFJzPvui7Ni4icPjxO5u1YjNTWAwFtK9xxxQS03dMb6aetPKBxzSP004S3AwqfR"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    //only run when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is>>>", authUser);
      if (authUser) {
        //The user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Header />
      {/* given following routes for each component to direct to different components*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/checkout"
          element={!user ? <Login /> : <Checkout />}
        />
        <Route
          exact
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
