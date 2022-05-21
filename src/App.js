import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { useData } from "./contexts/data-context";
import { Loader } from "./components/loader/Loader";
import Mockman from "mockman-js";
import { Login } from "./pages/Auth/Login";
import { Signup } from "./pages/Auth/Signup";
import { useLocation } from "react-router-dom";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { ScrollTop } from "./components/scrolltop/ScrollTop";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { PrivateRoute } from "./components/privateroute/PrivateRoute";
import { ProfilePage } from "./pages/Profile/ProfilePage";
import { ProfileCard } from "./pages/Profile/ProfileCard";
import { Address } from "./pages/Profile/Address";
import { Orders } from "./pages/Profile/Orders";
import { Checkout } from "./pages/Checkout/Checkout";
import { Search } from "./pages/Search/Search";

function App() {
  const { loader } = useData();
  let { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      {loader && <Loader />}
      {pathname !== "/login" && pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login title="login" />} />
        <Route path="/signup" element={<Signup title="register" />} />
        <Route path="/products" element={<Products title="products" />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart title="cart" />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist title="wishlist" />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout title="checkout" />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        >
          <Route path="" element={<ProfileCard title="profile" />} />
          <Route path="address" element={<Address title="address" />} />
          <Route path="orders" element={<Orders title="orders" />} />
        </Route>
        <Route path="/mock" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <ScrollTop />
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;
