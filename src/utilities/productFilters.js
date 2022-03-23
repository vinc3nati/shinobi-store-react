import { SortBy } from "./constant";

export const filterByCategory = (products, category) => {
  if (Object.values(category).every((v) => !v)) {
    return products;
  }
  return products.filter((product) => category[product.category]);
};

export const filterByPrice = (products, price) => {
  return products.filter((product) => Number(product.price) <= price);
};

export const filterByRating = (products, rating) => {
  return products.filter((product) => Number(product.rating) >= Number(rating));
};

export const searchProducts = (products, query) => {
  if (!query) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
};
export const sortProducts = (products, sortBy) => {
  return [...products].sort((a, b) =>
    sortBy === SortBy.LowToHigh ? a.price - b.price : b.price - a.price
  );
};
