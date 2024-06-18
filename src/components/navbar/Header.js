import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Button from './Button';

const Navbar = () => {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Implement your search logic here
  };

  const handleFeedbackClick = () => {
    console.log('Feedback button clicked');
    // Implement your feedback logic here
  };

  return (
    <div style={navbarStyle}>
      <Logo />
      <SearchBar onSearch={handleSearch} />
      <Button text="Give Feedback" onClick={handleFeedbackClick} />
    </div>
  );
};

const navbarStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#0bda51',
};

export default Navbar;
