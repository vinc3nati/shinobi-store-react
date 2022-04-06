import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const items = [
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Address",
    link: "/profile/address",
  },
  {
    title: "Orders",
    link: "/profile/orders",
  },
];

export const ProfilePage = () => {
  return (
    <section id="account">
      <div class="section-heading">Account</div>
      <div className="account-container">
        <ul className="account-link-list">
          {items.map(({ title, link }) => (
            <NavLink
              key={title}
              to={link}
              className={({ isActive }) =>
                isActive ? "account-link active" : "account-link"
              }
              end
            >
              {title}
            </NavLink>
          ))}
        </ul>
        <div className="account-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};
