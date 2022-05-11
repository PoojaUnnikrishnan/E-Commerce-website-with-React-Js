import React from "react";
//importing react hooks
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

import "./Product.css";

function Product({ id, title, price, rating, image }) {
  //values from data layer is used.
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  console.log("this is the basket>>>", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {/* using js inside jsx  */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="image"></img>
      <button className="button" onClick={addToBasket}>
        Add to basket
      </button>
      <button onClick={(e) => navigate("/payment")}>Buy Now</button>
    </div>
  );
}

export default Product;
