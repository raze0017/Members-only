import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
function Login() {
  const navigate = useNavigate();
  const navigateTosignup = () => {
    navigate("/signup");
  };
  return (
    <div className="div">
      Login form
      <div className="signup">
        <button className="btn-primary" onClick={navigateTosignup}>
          No account? Signup
        </button>
      </div>
    </div>
  );
}

export default Login;
