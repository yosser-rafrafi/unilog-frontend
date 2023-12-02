import React, { useState } from 'react';


import './Search.scss'
const SearchComponent = () => {
    const [location, setLocation] = useState('');
    const [budget, setBudget] = useState('');
  
    
  
    return (
      <div id="research">
      <div className="search-container">
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input"
        />
        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="search-input"
        />
        <input
          type="number"
          placeholder="Nombre de chambre"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="search-input"
        />
        <button className="search-button">
          Search
        </button>
      </div>
      </div>
    );
  };
  
  export default SearchComponent;