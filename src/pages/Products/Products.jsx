import React from "react";
import { useDocumentTitle } from "../../hooks/DocumentTitle";
import { Filters, ProductList } from "../../components/product/index";

export const Products = () => {
  useDocumentTitle("Product");
  return (
    <section id="product">
      <Filters />
      <ProductList />
    </section>
  );
};
