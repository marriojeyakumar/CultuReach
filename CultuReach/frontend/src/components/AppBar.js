import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './AppBar.css'; 
import appLogo from './img/logo.png'; 
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
        <RouterLink to="/" className="nav-link">
          Home
        </RouterLink>
        <RouterLink to="/events" className="nav-link">
          Events
        </RouterLink>
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
