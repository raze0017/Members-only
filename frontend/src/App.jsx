import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Posts from "./Componets/Posts";
import Signup from "./Componets/Signup";
import Login from "./Componets/Login";
import Clubs from "./Componets/Clubs";
import NavBar from "./Componets/NavBar";

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token");

  useEffect(() => {
    if (isAuthenticated && location.pathname === "/") {
      navigate("/clubs");
    }
  }, [isAuthenticated, navigate, location.pathname]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/log-out", {
        method: "GET",
        credentials: "include",
      });
      localStorage.removeItem("token");
      navigate("/Login");
    } catch (e) {
      console.log("ERROR IN Log out: ", e);
    }
  };

  // Conditionally render the NavBar
  const isLoginOrSignup =
    location.pathname === "/Login" ||
    location.pathname === "/signup" ||
    location.pathname === "/login";

  return (
    <>
      {!isLoginOrSignup && <NavBar handleLogout={handleLogout} />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/" element={<Signup />} />
        <Route path="/clubs/:club_id/posts" element={<Posts />} />
      </Routes>
    </>
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
