import React from "react";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Address = ({ title }) => {
  useDocumentTitle(title);
  return (
    <div className="address-card">
      <h6 className="text-bold">Random Name</h6>
      <p>Sunsan gali, chapri Naka, Kholi 420</p>
      <p>Mumbai,India</p>
      <p>Contact: +91 8238312392</p>
    </div>
  );
};
