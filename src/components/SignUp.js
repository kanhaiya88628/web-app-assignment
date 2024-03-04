import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import iconImage from "./Group 3.png";

const SignUp = ({ onSignUp }) => {
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (empId && name && dob && role && username && password) {
      const newUser = {
        empId,
        name,
        dob,
        role,
        username,
        password,
      };

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = [...existingUsers, newUser];

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert("Signup successful!");
      onSignUp();
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="login-form">
      <div
        className="icon"
        style={{ backgroundImage: `url(${iconImage})` }}
      ></div>
      <h2 style={{ visibility: "hidden" }}>Sign Up</h2>
      <div className="input-field">
        <label>Emp ID: </label>
        <input
          type="number"
          value={empId}
          onChange={(e) => setEmpId(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Date of Birth (DOB): </label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Role: </label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignUp} className="login-btn">
        Sign Up
      </button>
      <br />
      <Link to="/">Already have an account? Login here.</Link>
    </div>
  );
};

export default SignUp;
