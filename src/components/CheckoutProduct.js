import React from "react";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({id, title, price, image, rating}) {
    const [{}, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: actionTypes.REMOVE_FROM_BASKET,
            payload: id
        })
    }
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((index) => (
              <p key={index}>star</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;