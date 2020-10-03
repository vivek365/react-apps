import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return <div className="nav-link">
        <NavLink to="/" exact>Home </NavLink>
        <NavLink to="/about-us">About Us </NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <NavLink to="/lazy">Lazy Load</NavLink>
    </div>;
}

export default Navbar;