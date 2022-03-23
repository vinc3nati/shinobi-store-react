import { useData } from "../contexts/data-context";
import { SortBy } from "../utilities/constant";
import {
  searchProducts,
  filterByCategory,
  filterByPrice,
  filterByRating,
  sortProducts,
} from "../utilities/productFilters";

export const useFilteredData = () => {
  const {
    state: {
      filters: { sortBy, categories, search, priceRange, rating },
      products,
    },
  } = useData();

  const searchResults = searchProducts(products, search);
  const categorisedProducts = filterByCategory(searchResults, categories);
  const ratedProducts = filterByRating(categorisedProducts, rating);
  const pricedProducts = filterByPrice(ratedProducts, priceRange);
  const sortedProducts = sortProducts(pricedProducts, sortBy);
  return { sortedProducts };
};
