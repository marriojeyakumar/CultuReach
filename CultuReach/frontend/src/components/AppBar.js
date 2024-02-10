import React from 'react';
import './AppBar.css'; // Make sure to create a Navbar.css file for styling
import appLogo from './img/logo.png'; // Update with the correct path to your image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={appLogo} alt="logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">HOME</a>
        <a href="#events" className="nav-link">EVENTS</a>
        <a href="#profle" className="nav-link">PROFILE</a>
        <a href="#contact" className="nav-link">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;
