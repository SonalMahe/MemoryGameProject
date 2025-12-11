import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';


export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[username]) {
      alert("User already exists!");
      return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created! Please log in.");
    navigate("/login");
  }

  return (
    <div className="main">
      <div className="auth-container">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>

          <button onClick={() => navigate("/login")} style={{ marginTop: "10px" }}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
}
