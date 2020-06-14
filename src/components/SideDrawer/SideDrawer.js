import React from 'react';
import { Link } from 'react-router-dom';

import './SideDrawer.css';

const sideDrawer = (props) => {

    let drawerClassNames = 'side-drawer';
    if (props.show) {
        drawerClassNames = 'side-drawer open'
    }

    let sideDrawer = props.user ? (
        <ul>
            <Link to="/" className="drawer-logo">TWO WORDS</Link>
            <Link to="/notebook" className="drawer-link">NOTEBOOK</Link>
            <Link to="/about" className="drawer-link">STORY</Link>
            <Link to="" className="drawer-link" onClick={props.handleLogout}>LOG OUT</Link>
        </ul>
            ) : (
        <ul>
            <Link to="/" className="drawer-logo">TWO WORDS</Link>
            <Link to="/about" className="drawer-link">STORY</Link>
            <Link to="/login" className="drawer-link">LOGIN</Link>
            <Link to="/signup" className="drawer-link">SIGN UP</Link>
        </ul>
    )

    return <nav className={drawerClassNames}>{sideDrawer}</nav>;
};

export default sideDrawer;