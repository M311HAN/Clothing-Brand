// src/components/Header.js
import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';
import NavigationMenu from './NavigationMenu';

// Header component that displays the logo, title, and optionally, logout or sign-in messages based on user's login state.
function Header({ isLoggedIn, handleLogout }) {
  return (
    <header className="header">
      <img src={logo} alt="Sousa Logo" className="logo" />
      <h1 className="header-title">Sousa</h1>
      {isLoggedIn ? (
        <>
          <p className="header-tagline">Welcome back to Sousa fashion, from the moon to your room!</p>
          <button onClick={handleLogout} className="logout-button">Log Out</button>
        </>
      ) : (
        <p className="header-tagline">Hi there! Please sign in to experience the full cosmic collection!</p>
      )}
      <NavigationMenu /> 
    </header>
  );
}

export default Header;








