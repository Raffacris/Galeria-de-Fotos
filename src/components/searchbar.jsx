
import React from 'react';
import { FaSearch } from 'react-icons/fa'; 

export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Pesquisar fotos pelo nome..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button type="button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}