import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
      <header className="navbar">
        <nav className="navbar-container">
          <ul>
            <Link to="/" className="nav-logo">TWO WORDS</Link>
            <Link to="/notebook" className="nav-link">NOTEBOOK</Link>
            <Link to="/about" className="nav-link">STORY</Link>
            <Link to="/login" className="nav-link">LOGIN</Link>
            <Link to="/signup" className="nav-link">SIGN UP</Link>
          </ul>
        </nav>
      </header>
  );
}

export default Navbar