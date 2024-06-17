// src/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import instagramLogo from '../assets/instagram.png'; // Import Instagram logo
import twitterLogo from '../assets/twitter.png'; // Import Twitter logo

// Footer component that displays the footer content
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Sousa</p>
      <p>Follow us below and stay up to date with release dates and restock updates!</p>
      <div className="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
