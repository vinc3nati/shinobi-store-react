import React, { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/product/ProductCard";

export const Wishlist = () => {
  useDocumentTitle("cart");
  const {
    state: { wishlist, products },
  } = useData();
  const { user } = useAuth();
  let navigate = useNavigate();
  useEffect(() => {
    if (!user.token) {
      navigate("/login");
    }
  }, []);
  const wishlistedData = products.filter((prd) => prd.addedToWishlist);

  return (
    <section id="wishlist">
      <div class="section-heading">Wishlist</div>
      <div className="wishlist-container">
        {wishlist.length !== 0 &&
          wishlistedData.map((item) => (
            <ProductCard product={item} id={item._id} />
          ))}
        {wishlist.length === 0 && (
          <h3 className="text-center">Your Wishlist is Empty</h3>
        )}
      </div>
    </section>
  );
};
