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
  backgroundColor: '#000',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Button;
