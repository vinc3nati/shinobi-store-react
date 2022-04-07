import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/store_logo_white.png";
import { FaSearch, FaHeart, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { ACTIONS, FILTERS } from "../../utilities/constant";
import { Account } from "../account/Account";

export const Navbar = () => {
  const { user } = useAuth();
  const { state, dispatch } = useData();

  return (
    <nav className="navbar">
      <div className="main">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" className="img img-responsive" />
          </Link>
        </div>
        <div className="search-bar">
          <button type="submit" className="btn tertiary">
            <FaSearch />
          </button>
          <div className="input-grp">
            <input
              type="search"
              value={state.filters.search}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.ChangeFilters,
                  payload: {
                    type: FILTERS.Search,
                    value: e.target.value,
                  },
                })
              }
              placeholder="search"
            />
          </div>
        </div>

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
