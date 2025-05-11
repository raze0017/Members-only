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

      if (!response.ok) {
        // Show specific error from backend
        alert("Signup failed: " + data.message);
        return;
      }

      console.log("Signup successful:", data);
      navigate("/Login");
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed. Please try again later.");
    }
  };
  function navToLogin() {
    navigate("/Login");
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-[250px]">
        <div className="header text-2xl justify-center items-center">
          Sign up to Blog Away!
        </div>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <label className="label username flex flex-col">
            Enter Username:
            <input
              type="text"
              name="username"
              className="input"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
          </label>
          <label className="label password flex flex-col">
            Enter Password:
            <input
              type="password"
              name="password"
              className="input"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </label>
          <button className="btn-secondary" type="submit">
            Sign Up
          </button>
        </form>
        <button className="btn-accent" onClick={navToLogin}>
          Already a user? Sign-in!
        </button>
      </div>
    </div>
  );
}

export default Signup;
