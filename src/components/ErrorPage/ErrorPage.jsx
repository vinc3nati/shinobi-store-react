import React from "react";
import { useNavigate } from "react-router-dom";
import LostImage from "../../assets/lost_5.png";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section id="error-page">
      <main className="error-content">
        <div className="error-heading">
          <span className="error-status">404</span>
          <span className="error-text">Page not found</span>
        </div>
        <div className="error-helper">
          Please check the spelling or try again.
        </div>
        <div className="error-btn-grp">
          <button className="btn outline-primary" onClick={() => navigate("/")}>
            home
          </button>
          <button className="btn primary" onClick={() => navigate("/products")}>
            shop
          </button>
        </div>
      </main>
      <div className="error-image-container">
        <img src={LostImage} alt="error image" className="error-image" />
      </div>
    </section>
  );
};
