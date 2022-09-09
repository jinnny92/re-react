import "./App.css";
import Homepage from "./page/Homepage";
import About from "./page/About";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import { LoginPage } from "./page/LoginPage";
import UserPage from "./page/UserPage";
import { useState } from "react";
function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:id" element={<ProductDetailPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
