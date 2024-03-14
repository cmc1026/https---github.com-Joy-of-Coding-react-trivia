// Counter.jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Button Click Counter</h2>
      <p>Button Clicks: {count}</p>
      <button onClick={increment}>Click me!</button>
    </div>
  );
}

export default Counter;
