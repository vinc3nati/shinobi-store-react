import React from "react";
import { useNavigate } from "react-router-dom";

export const OrderCard = ({ products, amount, paymentId, style }) => {
  const navigate = useNavigate();
  return (
    <div className="order-card">
      <div className="order-heading">Order Confirmed</div>
      <p>Order ID : {paymentId}</p>
      <p>
        Total : <span className="text-bold">&#8377;{amount}</span>
      </p>
      <div className="order-address">
        Deliver to: Random name
        <p>Sunsan gali, Chapri Naka, Kholi 420, Mumbai, India</p>
      </div>
      {products.map(({ _id, image, title, category, qty }) => (
        <div
          key={_id}
          class="card horizontal"
          onClick={() => navigate(`/product/${_id}`)}
        >
          <div class="card-image-container">
            <img class="card-image" src={image} alt="order image" />
          </div>
          <div class="main-content">
            <div class="card-title">{title}</div>
            <div class="card-subtitle">{category}</div>
            <div className="card-quantity">Qty: {qty}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
