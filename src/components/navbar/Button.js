import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
};

const buttonStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  fontFamily: 'Poppins,sans-serif',
  backgroundColor: '#000',
  fontWeight: 'bold',
  color: 'green',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Button;
