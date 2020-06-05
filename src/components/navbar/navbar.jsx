import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-name">TWO WORDS</Link>
        <ul className="navbar-items">
          <li className="navbar-item">
          <Link to="/notebook" className="nav-link">Notebook</Link>
          </li>
          <li className="navbar-item">
          <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </nav>
  );
}

export default Navbar