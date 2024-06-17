// src/components/NavigationMenu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

// NavigationMenu component to provide a navigation bar with links to different pages.
function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul>
        <li><NavLink exact="true" to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : '')}>User Profile</NavLink></li>
        <li><NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link' : '')}>Shop</NavLink></li>
        <li><NavLink to="/legal" className={({ isActive }) => (isActive ? 'active-link' : '')}>Legal</NavLink></li>
        <li><NavLink to="/interest-calculator" className={({ isActive }) => (isActive ? 'active-link' : '')}>Interest Calculator</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;





