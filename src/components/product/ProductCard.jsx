import React from "react";
import { FaHeart } from "react-icons/fa";

export const ProductCard = ({ product }) => {
  const {
    image,
    title,
    category,
    rating,
    price,
    addedToCart,
    addedToWishlist,
  } = product;
  const cartHandler = async () => {};
  const wishlistHandler = (async) => {};
  return (
    <div className="card vertical">
      <div className="card-image-container">
        <img className="card-image" src={image} alt="simple image" />
      </div>
      <div className="main-content">
        <div className="card-title">
          {title}
          <FaHeart
            className={`wishlist ${addedToWishlist && "selected"}`}
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
          >
            {!addedToCart ? "Add to cart" : "Go to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
