import React from "react";
import { useData } from "../../contexts/data-context";
import { cartTotal, deliveryFee } from "../../utilities/cartCalculator";

export const CheckoutSummary = () => {
  const {
    state: { cart },
  } = useData();
  const total = cartTotal(cart);
  const delivery = deliveryFee(total);
  return (
    <div className="checkout-summary">
      <div className="checkout-heading">Order Details</div>
      <div className="checkout-subheading">
        <span>Item/s</span>
        <span>Qty</span>
      </div>
      {cart.map(({ _id, title, qty }) => (
        <div key={_id} className="checkout-details">
          <span>{title}</span>
          <span>{qty}</span>
        </div>
      ))}
      <div className="checkout-heading">Price Breakup</div>
      <div className="checkout-details">
        <span>Price ({cart.length} item/s)</span>
        <span>{total}</span>
      </div>
      <div className="checkout-details">
        <span>Delivery Charges</span>
        <span className="text-green">{delivery || "FREE"}</span>
      </div>
      <div className="checkout-details text-bold">
        <span>Total Amount</span>
        <span>&#8377; {total + delivery}</span>
      </div>

      <button className="btn primary">Checkout</button>
    </div>
  );
};
