import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
function Login() {
  const navigate = useNavigate();
  const navigateTosignup = () => {
    navigate("/signup");
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/log-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include",
    });
    const result = await response.json();
    if (response.ok) {
      console.log("SUCCESS:", result);
      localStorage.setItem("token", result.user.username);
      navigate("/Home");
    } else {
      alert("LOgin failed:" + result.message);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col mt-[250px]">
      <div className="header text-2xl justify-center items-center">
        Login to Blog Away!
      </div>
      <form
        className="flex items-center justify-center flex-col"
        onSubmit={handleSubmit}
      >
        <label className="label username flex flex-col">
          Enter Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </label>
        <label className="label password flex flex-col">
          Enter Password:
          <input
            type="password"
            name="password"
            className="input"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
        </label>
        <input type="submit" />
      </form>
      <div className="signup">
        <button className="btn-accent" onClick={navigateTosignup}>
          No account? Signup
        </button>
      </div>
    </div>
  );
}

export default Login;
