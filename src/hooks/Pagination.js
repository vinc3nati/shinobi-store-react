import { useState, useEffect, useMemo } from "react";
import { useData } from "../contexts/data-context";

export const usePagination = (data) => {
  const {
    state: { filters },
  } = useData();
  const [currentPage, setCurrentPage] = useState(0);
  const [productThreshold, setProductThreshold] = useState(7);

  const totalPages = Math.ceil(data.length / productThreshold);
  const pagedData = useMemo(() => {
    return data.slice(
      currentPage * productThreshold,
      (currentPage + 1) * productThreshold
    );
  }, [currentPage, productThreshold, data]);

  useEffect(() => {
    setCurrentPage(0);
  }, [filters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return {
    totalPages,
    pagedData,
    currentPage,
    setCurrentPage,
    setProductThreshold,
  };
};
