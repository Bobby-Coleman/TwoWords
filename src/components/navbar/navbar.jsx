import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ToggleButton from '../SideDrawer/ToggleButton';

const Navbar = (props) => {
    return (
      <header className="navbar">
        <nav className="navbar-container">
          <div>
            <ToggleButton click={props.drawerClickHandler}/>
          </div>
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