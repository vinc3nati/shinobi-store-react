import { useEffect, useRef } from "react";
import { useFilteredData } from "../../hooks/FilteredData";
import { usePagination } from "../../hooks/Pagination";
import { ProductCard } from "./ProductCard";
import { getThresholdValue } from "../../utilities/getThresholdValue";

export const ProductList = () => {
  const { sortedProducts: filteredData } = useFilteredData();
  const {
    totalPages,
    pagedData,
    currentPage,
    setCurrentPage,
    setProductThreshold,
  } = usePagination(filteredData);

  const mainRef = useRef();

  useEffect(() => {
    if (mainRef.current) {
      setProductThreshold(getThresholdValue(mainRef));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (mainRef.current) {
        setProductThreshold(getThresholdValue(mainRef));
      }
    });
    return () => window.removeEventListener("resize");
  }, [mainRef]);

  return (
    <main className="product-list">
      <header className="product-heading">Products</header>
      <div ref={mainRef} className="grid layout-3-column">
        {pagedData.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
      <div className="product-pagination">
        {Array.apply(0, Array(totalPages)).map((item, idx) => (
          <div
            className={`pagination-item ${currentPage === idx && "active"}`}
            key={item}
            onClick={() => setCurrentPage(idx)}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </main>
  );
};
