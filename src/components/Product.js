// src/Product.js
import React from 'react';
import './Product.css'; // Import the CSS file for styling

// Product component that displays product information
// Props:
// - name (string): The name of the product
// - description (string): The description of the product
// - price (number): The price of the product
function Product({ name, description, price }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default Product;
