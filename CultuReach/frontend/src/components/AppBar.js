import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './AppBar.css'; // Make sure to create a Navbar.css file for styling
import appLogo from './img/logo.png'; // Update with the correct path to your image
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const scrollToContact = () => {
    scroll.scrollTo('contact-section', {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={appLogo} alt="logo" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#events" className="nav-link">
          Events
        </a>
        <RouterLink to="/about-us" className="nav-link">
          About Us
        </RouterLink>
        <ScrollLink
          to="contact-section"
          smooth={true}
          duration={500}
          offset={-50}
          className="nav-link"
          onClick={scrollToContact}
        >
          Contact Us
        </ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
