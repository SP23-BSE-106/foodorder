import React, { useState } from 'react';
import FoodMenu from '../Components/FoodMenu';
import FilterDropdown from '../Components/FilterDropdown';

function Homepage() {
  const [category, setCategory] = useState('');
  const [foodItems] = useState([
    { id: 1, name: 'Pizza', description: 'Cheesy goodness', price: 10, image: 'pizza.jpg', category: 'Vegetarian' },
    { id: 2, name: 'Burger', description: 'Juicy patty', price: 8, image: 'burger.jpg', category: 'Non-Vegetarian' },
    { id: 3, name: 'Salad', description: 'Healthy and fresh', price: 5, image: 'salad.jpg', category: 'Vegetarian' },
  ]);

  const filteredItems = category
    ? foodItems.filter((item) => item.category === category)
    : foodItems;

  return (
    <div>
      <h1>Welcome to Food Order App</h1>
      <FilterDropdown category={category} setCategory={setCategory} />
      <FoodMenu items={filteredItems} onAddToCart={(item) => console.log('Added:', item)} />
    </div>
  );
}

export default Homepage;

