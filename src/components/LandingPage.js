// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

// LandingPage component that provides information about the company
function LandingPage() {
  return (
    <div className="landing-page">
      <h2>About Us</h2>
      <p>
        Welcome to Sousa, the most out-of-this-world clothing brand you've ever encountered! Our story began on an adventurous trip to the moon, where inspiration struck like a meteor shower. We gazed at the vast, barren lunar landscape and thought, "Why not create a clothing brand that's as unique and groundbreaking as this?"
      </p>
      <p>
        Our mission at Sousa is to blend the wonders of space exploration with the art of fashion. Every piece in our collection is crafted with fabrics and stitching engineered to the highest quality, just like the spaceships built at NASA. We believe in pushing the boundaries of what's possible, both in outer space and in fashion.
      </p>
      <p>
        Whether you're gearing up for a lunar landing or just a casual day on Earth, Sousa's clothing will have you looking stellar. Join us on our journey to make the universe a more stylish place, one outfit at a time.
      </p>
    </div>
  );
}

export default LandingPage;
