import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import ToggleButton from '../SideDrawer/ToggleButton';

const Navbar = (props) => {
  let navbar = props.user ? (
      <header className="header">
        <nav className="navbar-container">
          <ul>
            <NavLink to="/" className="nav-logo">TWO WORDS</NavLink>
            <NavLink to="/notebook" className="nav-link" activeClassName="active-nav-link">NOTEBOOK</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active-nav-link">STORY</NavLink>
            <NavLink to="" className="nav-link" onClick={props.handleLogout}>LOG OUT</NavLink>
            <span className="nav-greeting">{props.user.name}</span>
            <div className="nav-toggle-button">
              <ToggleButton click={props.drawerClickHandler}/>
            </div>
          </ul>
        </nav>
      </header>
    ) : (
      <header className="header">
        <nav className="navbar-container">
          <ul>
            <NavLink to="/" className="nav-logo">TWO WORDS</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active-nav-link">STORY</NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active-nav-link">LOGIN</NavLink>
            <NavLink to="/signup" className="nav-link" activeClassName="active-nav-link">SIGN UP</NavLink>
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