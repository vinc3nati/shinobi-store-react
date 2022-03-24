import React, { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { changeQuantityCart, deleteCart } from "../../utilities/API_REQUESTS";
import { ACTIONS, CARTQUANTITY } from "../../utilities/constant";
import { FaPlus, FaMinus } from "react-icons/fa";

export const CartCard = ({ item }) => {
  const [disabled, setDisabled] = useState(false);
  const { image, title, price, qty, _id, id } = item;
  const { user } = useAuth();
  const { dispatch } = useData();

  const handleIncrement = async () => {
    try {
      const response = await changeQuantityCart({
        productId: _id,
        token: user.token,
        type: CARTQUANTITY.Increment,
      });
      if (response.data.cart) {
        dispatch({
          type: ACTIONS.SetCart,
          payload: { cart: response.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDecrement = async () => {
    if (qty === 1) {
      handleDelete();
      return;
    }
    try {
      const response = await changeQuantityCart({
        productId: _id,
        token: user.token,
        type: CARTQUANTITY.Decrement,
      });
      if (response.data.cart) {
        dispatch({
          type: ACTIONS.SetCart,
          payload: { cart: response.data.cart },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    setDisabled(true);
    try {
      const response = await deleteCart({ productId: _id, token: user.token });
      if (response.data.cart) {
        dispatch({
          type: ACTIONS.SetCart,
          payload: { cart: response.data.cart },
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div class="card horizontal">
      <div class="card-image-container">
        <img class="card-image" src={image} alt={title + "image"} />
      </div>
      <div class="main-content">
        <div class="card-title">{title}</div>
        <div class="card-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          blanditiis beatae veritatis voluptas! Aut doloremque similique nisi
          esse provident molestias ad perferendis.
        </div>
        <div class="card-pricing">
          <span class="current-price">&#8377; {price}</span>
          <span class="discount">Limited Time Offer</span>
        </div>
        <div class="quantity-grp">
          <button class="btn tertiary" onClick={handleDecrement}>
            <FaMinus />
          </button>
          <div class="quantity">{qty}</div>
          <button class="btn tertiary" onClick={handleIncrement}>
            <FaPlus />
          </button>
        </div>
        <div class="btn-group">
          <button
            class="btn outline-error"
            disabled={disabled}
            onClick={handleDelete}
          >
            remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
