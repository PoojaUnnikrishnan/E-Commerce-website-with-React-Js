import React from "react";
import CurrencyFormat from "react-currency-format";
//accessing contents of data layer.
import { useStateValue } from "./StateProvider";
import { getbasketTotal } from "./reducer";
//using react hooks
import { useNavigate } from "react-router-dom";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        // currency format is used for changing from one currency format to another.
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length}items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getbasketTotal(basket)}
        displayType={"text"}
        // thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
      {/* this will take to payment page  */}
    </div>
  );
}

export default Subtotal;
