import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
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
  return (
    <div>
      <div>Hello world</div>
      <button className="btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
