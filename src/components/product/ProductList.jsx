import React from "react";
import { useFilteredData } from "../../hooks/FilteredData";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { sortedProducts: filteredData } = useFilteredData();
  return (
    <main className="product-list">
      <header className="product-heading">Products</header>
      <div className="grid layout-3-column">
        {filteredData.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </main>
  );
};
