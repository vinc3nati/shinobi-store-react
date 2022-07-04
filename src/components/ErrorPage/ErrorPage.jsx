import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/404_6.png";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const ErrorPage = ({ title }) => {
  useDocumentTitle(title);
  const navigate = useNavigate();
  return (
    <main id="error-page">
      <div className="error-container">
        <div className="error-img-container">
          <img className="error-img" src={errorImage} alt="error-logo" />
        </div>
        <div className="error-content">
          <div className="error-heading">
            <p>Error</p>
            <p>404</p>
          </div>
          <div className="error-text">Page not found</div>
          <div className="error-button-grp">
            <button
              className="btn outline-primary"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </button>
            <button
              className="btn primary"
              onClick={() => navigate("/products", { replace: true })}
            >
              Products
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
