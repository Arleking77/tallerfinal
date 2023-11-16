// SearchBar.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search-bar'>
      <Form.Control
        type="text"
        placeholder="Buscar Feriado"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
