import React from "react";
import { useNavigate } from "react-router-dom";
import { OrderCard } from "../../components/order/OrderCard";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Orders = ({ title }) => {
  useDocumentTitle(title);
  const {
    state: { orders },
  } = useData();
  const navigate = useNavigate();

  return (
    <>
      {orders.length === 0 ? (
        <div className="text-center">
          <h3>You haven't placed any orders!</h3>
          <button
            className="btn outline-primary"
            onClick={() => navigate("/products")}
          >
            Go to Products
          </button>
        </div>
      ) : (
        <div className="order-container">
          {orders.reverse().map((order) => (
            <OrderCard key={order.paymentId} {...order} />
          ))}
        </div>
      )}
    </>
  );
};
