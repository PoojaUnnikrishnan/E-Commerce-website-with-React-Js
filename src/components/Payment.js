import { CardElement } from "@stripe/react-stripe-js";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

// import component checkoutProduct
import CheckoutProduct from "./CheckoutProduct";

import "./Payment.css";

//accessing contents from data layer
import { useStateValue } from "./StateProvider";
import { getbasketTotal } from "./reducer";

function Payment() {
  const [{ basket, user }] = useStateValue();

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {};

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout{<Link to="/checkout">{basket?.length}items</Link>}</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address:</h3>
          </div>
          <div className="payment_address">
            {/* checking if user or guest  */}
            <p>{user ? user.email : "Guest"}</p>
            <p>2nd Lane</p>
            <p>Ejipura, Bangalore</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {/* displays whatever product are added to cart using map method in array  */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total :{value}</h3>}
                  decimalScale={2}
                  value={getbasketTotal(basket)}
                  displayType={"text"}
                  // thousandSeparator={true}
                  prefix={"₹"}
                />
                <button>Buy Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
