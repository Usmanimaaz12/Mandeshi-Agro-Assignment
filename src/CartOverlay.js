// CartOverlay.js
import React from 'react';

const overlayStyles = {
  position: 'fixed',
  top: 0,
  right: 0,  // Adjusted to cover the right side
  width: '100%',  // Set to 30% of the screen width
  height: '100%',  // Set to 80% of the screen height
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const closeStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

const cartStyles = {
  position: 'relative', // Add this to make close button absolute
  background: 'white',
  padding: '20px',
    borderRadius: '5px',
    width: "30%",
    height: "80%",
    right:"0"
};

const CartOverlay = ({ cartItems, closeCart, removeFromCart, updateQuantity }) => {
  return (
    <div style={overlayStyles} onClick={closeCart}>
      <div style={cartStyles} onClick={(e) => e.stopPropagation()}>
        <div style={closeStyles} onClick={closeCart}>
          X
        </div>
        <h2>Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartOverlay;
