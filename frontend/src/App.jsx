import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Posts from "./Componets/Posts";
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import Clubs from "./Componets/Clubs";
const AppRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/clubs");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/" element={<Signup />} /> {/* or login/signup */}
      <Route path="/clubs/:club_id/posts" element={<Posts />} />
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
