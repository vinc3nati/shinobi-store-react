import React, { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import { useOnClickOutside } from "../../hooks/OnClickOutside";
import { capitalize } from "../../utilities/capitalize";

export const Account = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const {
    user: { user, token },
    handleLogOut,
  } = useAuth();
  const toggleDropdown = () => setOpen((prev) => !prev);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.pathname;
  useOnClickOutside(dropdownRef, () => setOpen(false));

  return (
    <div ref={dropdownRef} className="user">
      {!token && (
        <Link to="/signup" state={{ from }}>
          <button className="btn icon-btn">
            <FaUserCircle />
            register
          </button>
        </Link>
      )}
      {token && (
        <>
          {" "}
          <div className="account-name" onClick={toggleDropdown}>
            <span className="text-bold">
              {capitalize(user.name.split(" ")[0])}
            </span>
            <IoIosArrowDown />
          </div>
          {open && (
            <div className="account-dropdown text-center">
              <ul className="list">
                <li onClick={() => navigate("/profile")}>Account</li>
                <li onClick={handleLogOut}>Sign Out</li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};
