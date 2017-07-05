import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Navigation Menu
const NavBarLinks = () => (
  <div>
    <Link className="logo" to={'/'}>MM</Link>

    <nav className="nav primary-nav">
      <ul>
        <li><Link to={'/'}>Galleries</Link></li>
        <li><Link to={'/'}>Book now</Link></li>
        <li><Link to={'/'}>Sign in</Link></li>
      </ul>
    </nav>
  </div>
);

export default NavBarLinks;