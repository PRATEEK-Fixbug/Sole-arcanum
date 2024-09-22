import React from 'react';
import './App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Sole Arcanum</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
