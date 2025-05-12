import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Componets/Home";
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import Clubs from "./Componets/Clubs";
const AppRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Clubs");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Clubs" element={<Clubs />} />
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
