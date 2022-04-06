import React from "react";
import { Navigate } from "react-router-dom";
import { CheckoutSummary } from "../../components/checkout/CheckoutSummary";
import { useData } from "../../contexts/data-context";

export const Checkout = () => {
  const {
    state: { cart },
  } = useData();

  return (
    <>
      {cart.length === 0 ? (
        <Navigate to="/cart" replace />
      ) : (
        <section id="checkout">
          <div class="section-heading">Checkout</div>
          <div className="checkout-container">
            <div className="checkout-address">
              <div className="address-content">
                <p className="address-heading">
                  Deliver to: <span className="text-bold">Random Name</span>
                </p>
                <p>Sunsan gali, chapri Naka, Kholi 420</p>
                <p>Mumbai,India</p>
                <p>Contact: +91 8238312392</p>
              </div>
              <button className="btn outline-primary">change</button>
            </div>
            <CheckoutSummary />
          </div>
        </section>
      )}
    </>
  );
};
