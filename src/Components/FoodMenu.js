import React from 'react';

function FoodMenu({ items, onAddToCart }) {
  return (
    <div className="food-menu">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.name} width="100%" />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default FoodMenu;
