import React from "react";

export const FeatureCard = ({ img, altText, caption, onClick }) => {
  return (
    <div className="feature-box" onClick={onClick}>
      <img className="img img-responsive" src={img} alt={altText} />
      <span className="feature-text">{caption}</span>
    </div>
  );
};
