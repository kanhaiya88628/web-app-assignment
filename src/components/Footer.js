import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/dashboard" className="footer-link">
        Home
      </Link>
      <Link to="/user-list" className="footer-link">
        User List
      </Link>
    </footer>
  );
};

export default Footer;
