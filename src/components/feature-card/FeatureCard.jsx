import React from "react";

export const FeatureCard = ({ img, altText, caption }) => {
  return (
    <div className="feature-box">
      <img className="img img-responsive" src={img} alt={altText} />
      <span className="feature-text">{caption}</span>
    </div>
  );
};
