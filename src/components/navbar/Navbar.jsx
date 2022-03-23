import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/store_logo_white.png";
import { FaSearch, FaHeart, FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import { useData } from "../../contexts/data-context";
import { ACTIONS, FILTERS } from "../../utilities/constant";

export const Navbar = () => {
  const { user } = useAuth();
  const { state, dispatch } = useData();
  let navigate = useNavigate();

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
              type="text"
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
            {state.wishlist.length !== 0 && (
              <span className="number secondary">{state.wishlist.length}</span>
            )}
          </Link>
          <Link to="/cart" className="badge">
            <FaShoppingBag className="badge-icon" />
            {state.cart.length !== 0 && (
              <span className="number secondary">{state.cart.length}</span>
            )}
          </Link>
        </div>
      </div>
      <div className="user">
        <button
          className="btn icon-btn"
          onClick={() =>
            user.token ? navigate("/logout") : navigate("/signup")
          }
        >
          <FaUserCircle />
          {user.token ? user.user.name : "Register"}
        </button>
      </div>
    </nav>
  );
};
