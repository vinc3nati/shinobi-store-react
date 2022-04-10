import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductCard } from "../../components/product/ProductCard";
import { useData } from "../../contexts/data-context";

export const Search = () => {
  const {
    state: { products },
  } = useData();
  const location = useLocation();
  const from = location.pathname;
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("searchQuery");
  const searchedData = products.filter(
    ({ title, category }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery.toLowerCase().includes(title.toLowerCase()) ||
      searchQuery.toLowerCase().includes(category.toLowerCase())
  );

  const foundItems = searchedData.length;

  return (
    <section id="search-page">
      {foundItems === 0 ? (
        <div className="text-center">
          <h2>No results found for "{searchQuery}"</h2>
          <h6>Check out our other products</h6>
          <Link to="/products" state={{ from }} className="btn outline-primary">
            go to products
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-center">
            Search results for "{searchQuery}"{" "}
            <span className="text-light">- {foundItems} item/s</span>
          </h2>
          <div className="grid layout-4-column">
            {searchedData.map((prd) => (
              <ProductCard key={prd._id} product={prd} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
