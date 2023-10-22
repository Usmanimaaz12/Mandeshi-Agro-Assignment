// Header.js
import React from 'react';

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'lightblue',
  color: 'white',
  padding: '10px',
};

const navStyles = {
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
};

const cartButtonStyles = {
  background: 'transparent',
  border: '2px solid #fff',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background 0.3s, color 0.3s',
};

const Header = ({ openCart }) => {
  return (
    <header style={headerStyles}>
      <div>
        <img src="/path-to-your-logo.png" alt="Logo" width="50" height="50" />
      </div>
      <ul style={navStyles}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
      <button style={cartButtonStyles} onClick={openCart}>Cart</button>
    </header>
  );
};

export default Header;
