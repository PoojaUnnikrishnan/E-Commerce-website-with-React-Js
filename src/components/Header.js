import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
//Hooks in react
import { useStateValue } from "./StateProvider";
//for user authentication
import { auth } from "../firebase";

import "./Header.css";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    //This checks if its a user or not.
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
          alt="amazonLogo"
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        {/*search icon is given here.*/}
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              {/* checking if its a user or guest  */}
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCart />
            <span className="header_optionLineTwo header_BasketCount">
              {/* This displays no of elements present in basket */}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
