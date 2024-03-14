// src/ButtonComponent.js

import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ButtonComponent;
