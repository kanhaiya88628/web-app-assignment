import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import iconImage from "./Group 3.png";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      alert("Login successful!");
      onLogin();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Please try again or sign up.");
    }
  };

  return (
    <div className="login-form">
      <div
        className="icon"
        style={{ backgroundImage: `url(${iconImage})` }}
      ></div>
      <h2 style={{ visibility: "hidden" }}>Login</h2>
      <div
        className="icon"
        style={{ backgroundImage: `url(${iconImage})` }}
      ></div>
      <div className="input-field">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-field">
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
      <br />
      <Link to="/signup" className="text-below-btn">
        Don't have an account? Sign Up here.
      </Link>
    </div>
  );
};

export default Login;
