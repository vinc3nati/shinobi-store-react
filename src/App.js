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

function App() {
  const { loader } = useData();
  let { pathname } = useLocation();
  return (
    <>
      {loader && <Loader />}
      {pathname !== "/login" && pathname !== "/signup" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/mock" element={<Mockman />} />
      </Routes>
      {pathname !== "/login" && pathname !== "/signup" && <Footer />}
    </>
  );
}

export default App;
