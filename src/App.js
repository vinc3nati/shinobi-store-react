import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
