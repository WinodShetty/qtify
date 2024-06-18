import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search an album of your choice"
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>Search</button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  flex: '1',
  margin: '10px 250px',
};

const inputStyle = {
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px 0 0 4px',
  flex: '1',
};

const buttonStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  backgroundColor: '#fff',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
};

export default SearchBar;
