import React, { useEffect } from "react";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/product/ProductCard";
import WishlistGif from "../../assets/wishlist.gif";

export const Wishlist = ({ title }) => {
  useDocumentTitle(title);
  const {
    state: { wishlist, products },
  } = useData();
  const navigate = useNavigate();

  const wishlistedData = products.filter((prd) => prd.addedToWishlist);

  return (
    <section id="wishlist">
      <div class="section-heading">Wishlist</div>
      {wishlist.length !== 0 && (
        <div className="wishlist-container">
          {wishlist.length !== 0 &&
            wishlistedData.map((item) => (
              <ProductCard product={item} id={item._id} />
            ))}
        </div>
      )}
      {wishlist.length === 0 && (
        <div className="empty-wishlist">
          <h3 className="text-center">Your Wishlist is Empty</h3>
          <div className="gif-container">
            <img src={WishlistGif} alt="Cart gif" />
          </div>
          <p className="empty-text">Go to products</p>
          <button
            className="btn outline-primary"
            onClick={() => navigate("/products", { replace: true })}
          >
            products
          </button>
        </div>
      )}
    </section>
  );
};
