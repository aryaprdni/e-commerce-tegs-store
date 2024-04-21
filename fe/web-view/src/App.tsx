import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/home/HomePage";
import { RegisterPage } from "./Pages/Register/RegisterPage";
import { LoginPage } from "./Pages/Login/LoginPage";
import { SearchPage } from "./Pages/Search/SearchPage";
import { UserPage } from "./Pages/User/UserPage";
import { ShoppingCard } from "./Pages/shoppingCard/ShoppingCard";

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
      </Routes>
    </>
  );
}

export default App;
