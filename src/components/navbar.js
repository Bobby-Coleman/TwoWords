import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="navbar-name">TWO WORDS</Link>
        <ul className="navbar-items">
          <li className="navbar-item">
          <Link to="/notebook" className="nav-link">Notebook</Link>
          </li>
        </ul>
      </nav>
    );
  }
}