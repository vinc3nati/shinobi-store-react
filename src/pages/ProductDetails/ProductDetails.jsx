import React, { useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { FaHeart } from "react-icons/fa";
import {
  deleteWishlist,
  postCart,
  postWishlist,
} from "../../utilities/API_REQUESTS";
import { ACTIONS } from "../../utilities/constant";

export const ProductDetails = () => {
  const [disabled, setDisabled] = useState(false);
  const { productId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    state: { products, cart, wishlist },
    dispatch,
  } = useData();

  const productToDisplay = products.find((prd) => prd._id === productId) || {};
  const {
    _id,
    image,
    title,
    price,
    rating,
    category,
    addedToCart,
    addedToWishlist,
  } = productToDisplay;

  const location = useLocation();
  const from = location.pathname;

  const cartHandler = async () => {
    setDisabled(true);
    try {
      if (!user.token) {
        navigate("/login", { state: { from }, replace: true });
        return;
      }
      if (addedToCart) {
        navigate("/cart");
        return;
      }
      const response = await postCart({
        product: { ...productToDisplay, qty: 1 },
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
    setDisabled(true);
    try {
      if (!user.token) {
        navigate("/login", { state: { from }, replace: true });
        return;
      }
      let response = null;
      if (addedToWishlist) {
        response = await deleteWishlist({ itemId: _id, token: user.token });
      } else {
        response = await postWishlist({
          product: { ...productToDisplay },
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
    <>
      {productToDisplay ? (
        <section id="product-display">
          <aside className="product-display-aside">
            <img
              className="product-display-image"
              src={image}
              alt="product image"
            />
            <FaHeart
              className={`wishlist ${addedToWishlist && "selected"}`}
              style={disabled && { userSelect: "none", pointerEvents: "none" }}
              onClick={wishlistHandler}
            />
          </aside>
          <main className="product-display-details">
            <div className="primary-details">
              <header className="product-title">{title}</header>
              <div className="product-rating">
                {rating}
                <span className="product-star">&#9733;</span>
              </div>
              <div className="product-price text-bold">&#8377; {price} /-</div>
            </div>
            <div className="secondary-details">
              <div className="product-category">
                <span className="text-bold">Category:</span> {category}
              </div>
              <div className="product-description">
                <span className="text-bold">Description:</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat quae officiis dolorem amet aliquid, doloribus in
                  vitae ipsa, autem soluta est nostrum ex aspernatur, reiciendis
                  dignissimos architecto voluptate assumenda consectetur.
                </p>
              </div>
            </div>
            <div className="button-group">
              <button
                className={`btn ${addedToCart ? "" : "outline"}`}
                onClick={cartHandler}
                disabled={disabled}
              >
                {!addedToCart ? "Add to cart" : "Go to cart"}
              </button>
              <button className="btn primary">Buy Now</button>
            </div>
          </main>
        </section>
      ) : (
        <h3 className="text-center text-secondary">
          Could not load the product, try again!
        </h3>
      )}
    </>
  );
};
