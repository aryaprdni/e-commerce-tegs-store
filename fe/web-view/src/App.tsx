import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/home/HomePage";
import { RegisterPage } from "./Pages/Register/RegisterPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { SearchPage } from "./Pages/Search/SearchPage";
import { UserPage } from "./Pages/User/UserPage";
import { ShoppingCard } from "./Pages/shoppingCard/ShoppingCard";
import ProductDetail from "./Pages/product-detail";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/shopping-card" element={<ShoppingCard />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
