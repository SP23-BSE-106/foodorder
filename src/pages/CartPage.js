import React, { useState } from 'react';
import Cart from '../Components/Cart';

function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: 'Pizza', price: 10, quantity: 1 },
    { id: 2, name: 'Burger', price: 8, quantity: 2 },
  ]);

  const handleUpdateQuantity = (item, change) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + change, 0) }
          : cartItem
      )
    );
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cart={cart} onUpdateQuantity={handleUpdateQuantity} />
    </div>
  );
}

export default CartPage;
