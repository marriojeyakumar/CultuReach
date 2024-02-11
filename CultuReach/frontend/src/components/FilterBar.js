import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = () => {
  const [category, setCategory] = useState('');
  const [culture, setCulture] = useState('');

  return (
    <div className="filter-bar">
      <select
        className={`filter-dropdown ${category && 'selected'}`}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="dancing">Dancing</option>
        <option value="singing">Singing</option>
        <option value="recreation">Recreation</option>
        <option value="art">Art</option>
        <option value="food">Food</option>
      </select>

      <select
        className={`filter-dropdown ${culture && 'selected'}`}
        value={culture}
        onChange={(e) => setCulture(e.target.value)}
      >
        <option value="">Culture</option>
        <option value="portuguese">Portuguese Brazilian</option>
        <option value="indian">Indian</option>
        <option value="chinese">Chinese</option>
        <option value="japanese">Japanese</option>
        <option value="italian">Italian</option>
      </select>
    </div>
  );
};

export default FilterBar;