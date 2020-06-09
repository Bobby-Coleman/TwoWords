import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <Link to="/" className="drawer-logo">TWO WORDS</Link>
            <Link to="/notebook" className="drawer-link">NOTEBOOK</Link>
            <Link to="/about" className="drawer-link">STORY</Link>
            <Link to="/login" className="drawer-link">LOGIN</Link>
            <Link to="/signup" className="drawer-link">SIGN UP</Link>
        </ul>
    </nav>
);

export default sideDrawer;