/*
  * A simple counter where we can change the value of the counter on the screen via the increment and decrement buttons.
  * Let the initial value of the counter be 0.
  * Increase with + - decrease value

*/

import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>COUNTER:</div>
      <button onClick={() => setCounter(counter - 1)}>negative</button>
      <span data-testid="counter-space">{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>pozitive</button>
    </>
  );
};

export default Counter;