import React from "react";
import { useFilteredData } from "../../hooks/FilteredData";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { sortedProducts: filteredData } = useFilteredData();
  return (
    <main class="product-list">
      <header class="product-heading">Products</header>
      <div class="grid layout-3-column">
        {filteredData.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </main>
  );
};
