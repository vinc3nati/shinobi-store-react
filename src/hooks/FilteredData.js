import { useData } from "../contexts/product-context";
import { SortBy } from "../utilities/constant";
import {
  searchProducts,
  filterByCategory,
  filterByPrice,
  filterByRating,
  sortProducts,
} from "../utilities/productFilters";

const union = (...arr) =>
  arr.reduce((acc, curr) =>
    //   acc.concat(curr.filter((el) => !acc.some((ele) => ele.id === el.id))),
    acc.filter((item) => curr.includes(item))
  );

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
