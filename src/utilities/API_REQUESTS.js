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

export const postCart = async ({ product, token }) =>
  await axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );

export const deleteCart = async ({ productId, token }) =>
  await axios.delete(`/api/user/cart/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const deleteCartAll = async ({ token }) =>
  await axios.delete("/api/user/cart/all", {
    headers: {
      authorization: token,
    },
  });

export const changeQuantityCart = async ({ productId, token, type }) =>
  await axios.post(
    `/api/user/cart/${productId}`,
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

export const postWishlist = async ({ product, token }) =>
  await axios.post(
    "/api/user/wishlist",
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteWishlist = async ({ productId, token }) =>
  await axios.delete(`/api/user/wishlist/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const getAddress = async ({ token }) =>
  await axios.get("/api/user/address", {
    headers: {
      authorization: token,
    },
  });

export const postAddress = async ({ address, token }) =>
  await axios.post(
    "/api/user/address",
    { address },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const updateAddress = async ({ addressId, token, address }) =>
  await axios.post(
    `/api/user/address/${addressId}`,
    { address },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteAddress = async ({ addressId, token }) =>
  await axios.delete(`/api/user/address/${addressId}`, {
    headers: {
      authorization: token,
    },
  });
