import axios from "axios";

export const loginUser = async ({ email, password }) =>
  await axios.post("/api/auth/login", {
    email,
    password,
  });

export const signupUser = async ({ name, email, password }) =>
  await axios.post("/api/auth/signup", {
    email,
    password,
    name,
  });

export const getProducts = async () => await axios.get("/api/products");

export const getCategories = async () => await axios.get("/api/categories");

export const getCart = async ({ token }) =>
  await axios.get("/api/user/cart", {
    headers: {
      authorization: token,
    },
  });

export const postCart = async ({ item, token }) =>
  await axios.post(
    "/api/user/cart",
    { item },
    { headers: { authorization: token } }
  );

export const deleteCart = async ({ itemId, token }) =>
  await axios.delete(`/api/user/cart/${itemId}`, {
    headers: {
      authorization: token,
    },
  });

export const changeQuantityCart = async ({ itemId, token, type }) =>
  await axios.post(
    `/api/user/cart/${itemId}`,
    {
      action: { type },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const getWishlist = async ({ token }) =>
  await axios.get("/api/user/wishlist", {
    headers: {
      authorization: token,
    },
  });

export const postWishlist = async ({ item, token }) =>
  await axios.post(
    "/api/user/wishlist",
    { item },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteWishlist = async ({ itemId, token }) =>
  await axios.delete(`/api/user/wishlist/${itemId}`, {
    headers: {
      authorization: token,
    },
  });
