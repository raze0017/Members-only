import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
function Signup() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      console.log("Signup successful:", data);
      navigate("/Login");
      // maybe reset form or redirect
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="header text-2xl">Sign up to Blog Away!</div>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label className="label username">
          Enter Username:
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </label>
        <label className="label password">
          Enter Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </label>
        <button className="btn-primary" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
