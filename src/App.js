// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // Import Navigate
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Product from './components/Product';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage'; 
import InterestCalculatorPage from './components/InterestCalculatorPage';
import './App.css';

// Main App component with router and state management for user session.
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Handles user login, sets logged in state to true.
  const handleSignIn = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

    // Handles user logout, resets state and alerts the user.
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    alert('User has logged out');
  };

  const products = [
    { name: 'T-Shirt', description: 'A cool cotton t-shirt.', price: 19.99 },
    { name: 'Jeans', description: 'Stylish denim jeans.', price: 49.99 },
    { name: 'Jacket', description: 'A warm winter jacket.', price: 89.99 },
    { name: 'Sneakers', description: 'Comfortable and stylish sneakers.', price: 59.99 },
  ];

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<UserProfile isLoggedIn={isLoggedIn} email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleSignIn={handleSignIn} handleLogout={handleLogout} />} />
        <Route path="/shop" element={<ProductList products={products} />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/interest-calculator" element={<InterestCalculatorPage />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Default route */}
      </Routes>
      <Footer />
    </div>
  );
}

// Component to handle user profile, conditional rendering based on login status.
function UserProfile({ isLoggedIn, email, password, setEmail, setPassword, handleSignIn, handleLogout }) {
  return (
    <div>
      {!isLoggedIn ? (
        <div className="sign-in-container">
          <h2>User Profile</h2>
          <form onSubmit={handleSignIn} className="sign-in-form">
            <div>
              <label>Email: </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </div>
      ) : (
        <div className="logout-container">
          <p className="signed-in-message">Hi, you are signed in! Ready to explore the cosmos?</p>
          <button onClick={handleLogout} className="sign-out-button">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

// Component to render a list of products, mapping through an array of product data.
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} name={product.name} description={product.description} price={product.price} />
      ))}
    </div>
  );
}

export default App;


