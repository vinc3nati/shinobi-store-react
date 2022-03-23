import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { useData } from "./contexts/product-context";
import { Loader } from "./components/loader/Loader";
import Mockman from "mockman-js";

function App() {
  const { loader } = useData();
  return (
    <>
      {loader && <Loader />}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        {/* <Route path="/product/:productId" element={<ProductDetails />} /> */}
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
