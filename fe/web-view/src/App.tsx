import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/home/HomePage";
import { RegisterPage } from "./Pages/Register/RegisterPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { SearchPage } from "./Pages/Search/SearchPage";
import { UserPage } from "./Pages/User/UserPage";
import { ShoppingCard } from "./Pages/shoppingCard/ShoppingCard";
import ProductDetail from "./Pages/product-detail";
import Checkout from "./Pages/checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
<<<<<<< HEAD
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/product-detail" element={<ProductDetail />} />
=======
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/checkout" element={<Checkout />} />
>>>>>>> 77752c37ee71b98df5ca907497c3456beca0829c
      </Routes>
    </>
  );
}

export default App;
