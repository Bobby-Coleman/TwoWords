import React, { Component } from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="NavBar">
        <div className="logo">
          <Link to="/" className="nav-link">TWO WORDS</Link>
        </div>
        <ul className="navbar-items">
          <li className="navbar-item">
          <Link to="/notebook" className="nav-link">Notebook</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar