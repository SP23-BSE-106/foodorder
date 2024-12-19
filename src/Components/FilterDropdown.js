import React from 'react';

function FilterDropdown({ category, setCategory }) {
  return (
    <div>
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
      </select>
    </div>
  );
}

export default FilterDropdown;
