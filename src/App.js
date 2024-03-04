// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserListView from "./components/UserListView";
import SignUp from "./components/SignUp";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    setIsLoggedIn(true);
    setMessage("Login successful!");
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
    setMessage("Signup successful!");
  };

  return (
    <Router>
      <div>
        {message && <div>{message}</div>}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-list" element={<UserListView />} />
          <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
          <Route
            path="/"
            element={
              isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
