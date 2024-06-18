import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <div style={logoContainerStyle}>
      <img src={logo} alt="QTify Logo" style={logoStyle} />
    </div>
  );
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  height: '40px', // Adjust the size as needed
};

export default Logo;
