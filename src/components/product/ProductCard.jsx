import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import {
  deleteWishlist,
  postCart,
  postWishlist,
} from "../../utilities/API_REQUESTS";
import { useData } from "../../contexts/data-context";
import { ACTIONS } from "../../utilities/constant";

export const ProductCard = ({ product }) => {
  const {
    _id,
    image,
    title,
    category,
    rating,
    price,
    addedToCart,
    addedToWishlist,
  } = product;
  const { user } = useAuth();
  const { dispatch } = useData();
  let navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const cartHandler = async () => {
    try {
      setDisabled(true);
      if (!user.token) {
        navigate("/login");
        return;
      }
      if (addedToCart) {
        navigate("/cart");
        return;
      }
      const response = await postCart({
        item: { ...product, qty: 1 },
        token: user.token,
      });
      if (response.data.cart) {
        dispatch({
          type: ACTIONS.SetCart,
          payload: { cart: response.data.cart },
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisabled(false);
    }
  };

  const wishlistHandler = async () => {
    try {
      setDisabled(true);
      if (!user.token) {
        navigate("/login");
        return;
      }
      let response = null;
      if (addedToWishlist) {
        response = await deleteWishlist({ itemId: _id, token: user.token });
      } else {
        response = await postWishlist({
          item: { ...product },
          token: user.token,
        });
      }
      if (response.data.wishlist) {
        dispatch({
          type: ACTIONS.SetWishlist,
          payload: { wishlist: response.data.wishlist },
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="card vertical">
      <div className="card-image-container">
        <img
          className="card-image"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${_id}`)}
          src={image}
          alt="simple image"
        />
      </div>
      <div className="main-content">
        <div className="card-title">
          {title}
          <FaHeart
            className={`wishlist ${addedToWishlist && "selected"}`}
            style={disabled && { userSelect: "none", pointerEvents: "none" }}
            onClick={wishlistHandler}
          />
        </div>
        <div className="card-subtitle">{category}</div>
        <div className="card-content">{rating}&#9733;</div>
        <div className="card-pricing">
          <span className="current-price">Rs. {price}</span>
        </div>
        <div className="btn-group">
          <button
            className={`btn ${addedToCart ? "outline-primary" : "primary"}`}
            onClick={cartHandler}
            disabled={disabled}
          >
            {!addedToCart ? "Add to cart" : "Go to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
