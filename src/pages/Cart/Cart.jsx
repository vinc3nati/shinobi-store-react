import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartCard } from "../../components/cart/CartCard";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { cartTotal, deliveryFee } from "../../utilities/cartCalculator";

export const Cart = () => {
  useDocumentTitle("cart");
  const {
    state: { cart },
  } = useData();
  const { user } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!user.token) {
      navigate("/login");
    }
  }, []);

  const total = cartTotal(cart);
  const delivery = deliveryFee(total);

  return (
    <section id="cart">
      <div class="section-heading">Cart</div>
      {cart.length !== 0 && (
        <div className="cart-wrapper">
          <main className="cart-container">
            {cart.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </main>
          <aside className="cart-price">
            <header className="price-heading">Price details</header>
            <div className="price-content">
              <div className="price-grp">
                <span>Price ({cart.length} Items)</span>
              </div>
              {cart.map(({ _id, title, qty, price }) => (
                <div className="price-grp" key={_id}>
                  <span>{title}</span>
                  <span>X{qty}</span>
                  <span>&#8377; {price * qty}</span>
                </div>
              ))}
              <div className="price-grp">
                <span>Delivery Charges</span>
                <span className="text-green">{delivery || "FREE"}</span>
              </div>
              <div className="price-grp total-amount">
                <span>Total Amount</span>
                <span>₹{total + delivery}</span>
              </div>
            </div>
            <button className="btn primary">Place Order</button>
          </aside>
        </div>
      )}
      {!cart.length && <h3 className="text-center">Your Cart is Empty</h3>}
    </section>
  );
};
