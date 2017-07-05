import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Navigation Menu
const NavBarLinks = () => (
  <div>
    <h1 className="logo">
      <a href="#">MM</a>
    </h1>

    <nav className="nav primary-nav">
      <ul>
        <li><a href="#">Galleries</a></li>
        <li><a href="#">Book now</a></li>
        <li><a href="#">Sign in</a></li>
      </ul>
    </nav>
  </div>
);

export default NavBarLinks;