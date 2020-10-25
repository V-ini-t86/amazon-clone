import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log(getBasketTotal(basket));
  return (
    <div className="subtotal">
      <div className="subtotal__top">
        <p>
          {/* Part of the homework */}
          Subtotal ({basket.length} items):
          <strong>
            <CurrencyFormat
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"Text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>
      </div>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
