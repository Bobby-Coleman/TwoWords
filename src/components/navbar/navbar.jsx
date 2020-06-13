import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ToggleButton from '../SideDrawer/ToggleButton';

const Navbar = (props) => {
  let navbar = props.user ? (
      <header className="header">
        <nav className="navbar-container">
          <ul>
            <Link to="/" className="nav-logo">TWO WORDS</Link>
            <Link to="/notebook" className="nav-link">NOTEBOOK</Link>
            <Link to="/about" className="nav-link">STORY</Link>
            <span className="greeting">"Hi there," {props.user.name}</span>
          </ul>
        </nav>
      </header>
    ) : (
      <header className="header">
        <nav className="navbar-container">
          <ul>
            <Link to="/login" className="nav-link">LOGIN</Link>
            <Link to="/signup" className="nav-link">SIGN UP</Link>
            <div className="nav-toggle-button">
              <ToggleButton click={props.drawerClickHandler}/>
            </div>
          </ul>
        </nav>
      </header>
  );

  return <div className="header">{navbar}</div>;

}

export default Navbar