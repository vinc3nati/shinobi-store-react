import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/store_logo_white.png";
import { FaSearch, FaHeart, FaShoppingBag, FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="main">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" className="img img-responsive" />
          </a>
        </div>
        <div className="search-bar">
          <button type="submit" className="btn tertiary">
            <FaSearch />
          </button>
          <div className="input-grp">
            <input type="text" placeholder="search" />
          </div>
        </div>

        <div className="nav-links">
          <Link to="/wishlist" className="badge">
            <FaHeart className="badge-icon" />
          </Link>
          <Link to="/cart" className="badge">
            <FaShoppingBag className="badge-icon" />
            <span className="number secondary">9+</span>
          </Link>
        </div>
      </div>
      <div className="user">
        <Link to="/auth">
          <button className="btn icon-btn">
            <FaUserCircle />
            Login
          </button>
        </Link>

        {/* <span className="text-tertiary">username</span>
        <img className="avatar sm" src="https://source.unsplash.com/DomqHKN2Xik/" alt="avatar_1">  */}
      </div>
    </nav>
  );
};
