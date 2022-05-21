import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/store_logo_white.png";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { Account } from "../account/Account";
import { SearchBar } from "./searchbar";

export const Navbar = () => {
  const { user } = useAuth();
  const { state } = useData();

  return (
    <nav className="navbar">
      <div className="main">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="img img-responsive" />
          </Link>
        </div>
        <SearchBar />
        <div className="nav-links">
          <Link to="/wishlist" className="badge">
            <FaHeart className="badge-icon" />
            {state.wishlist.length !== 0 && user.token && (
              <span className="number secondary">
                {state.products.reduce(
                  (acc, curr) => (curr.addedToWishlist ? acc + 1 : acc),
                  0
                )}
              </span>
            )}
          </Link>
          <Link to="/cart" className="badge">
            <FaShoppingBag className="badge-icon" />
            {state.cart.length !== 0 && user.token && (
              <span className="number secondary">
                {state.products.reduce(
                  (acc, curr) => (curr.addedToCart ? acc + 1 : acc),
                  0
                )}
              </span>
            )}
          </Link>
        </div>
        <Account />
      </div>
    </nav>
  );
};
