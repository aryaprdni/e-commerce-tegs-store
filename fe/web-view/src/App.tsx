import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/home/HomePage";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/Register/RegisterPage";
import ProductDetail from "./Pages/product-detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
