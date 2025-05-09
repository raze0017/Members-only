import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Componets/Home";
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";

const AppRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Signup />} /> {/* or login/signup */}
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
