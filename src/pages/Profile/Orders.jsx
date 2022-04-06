import React from "react";
import { useDocumentTitle } from "../../hooks/DocumentTitle";

export const Orders = ({ title }) => {
  useDocumentTitle(title);
  return <div>Orders</div>;
};
