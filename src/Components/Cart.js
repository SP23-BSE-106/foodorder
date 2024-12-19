import React from 'react';

function Cart({ cart, onUpdateQuantity }) {
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <div>
            <button onClick={() => onUpdateQuantity(item, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item, 1)}>+</button>
          </div>
          <p>Price: ${item.price * item.quantity}</p>
        </div>
      ))}
      <h3>Total: ${cartTotal}</h3>
    </div>
  );
}

export default Cart;
