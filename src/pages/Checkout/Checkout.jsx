import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CheckoutSummary } from "../../components/checkout/CheckoutSummary";
import { useData } from "../../contexts/data-context";

export const Checkout = () => {
  const [selectedAddress, setSelectedAddress] = useState({});
  const {
    state: { cart, address },
  } = useData();
  const navigate = useNavigate();
  return (
    <>
      {cart.length === 0 ? (
        <Navigate to="/cart" replace />
      ) : (
        <section id="checkout">
          <div className="section-heading">Checkout</div>
          <div className="checkout-container">
            <div className="checkout-address">
              {address.length !== 0 && (
                <>
                  <h6>Deliver To: </h6>
                  {address.map((item) => (
                    <div className="radio-grp" key={item._id}>
                      <input
                        type="radio"
                        name="adress-input"
                        id={item.name + "address"}
                        value={item}
                        onChange={() => setSelectedAddress(item)}
                      />
                      <label htmlFor={item.name + "address"}>
                        <span className="radio-btn"></span>
                        <div className="address-content">
                          <p className="address-heading">
                            <span className="text-bold">{item.name}</span>
                          </p>
                          <p>{item.street}</p>
                          <p>
                            {item.city},{item.state} {item.zipCode},{" "}
                            {item.country}
                          </p>
                          <p>Contact: {item.mobile}</p>
                        </div>
                      </label>
                    </div>
                  ))}
                </>
              )}
              {address.length === 0 && (
                <div className="text-center">
                  <h3>Please add a address</h3>
                  <button
                    className="btn primary"
                    onClick={() => navigate("/profile/address")}
                  >
                    go to address
                  </button>
                </div>
              )}
            </div>
            <CheckoutSummary selectedAddress={selectedAddress} />
          </div>
        </section>
      )}
    </>
  );
};
