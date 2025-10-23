import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">HappyDelivery</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/order">Order</Link>
        <Link to="/orders">My Orders</Link>
      </div>
    </nav>
  );
}

export default Navbar;
