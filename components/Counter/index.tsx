import React, { useState, MouseEventHandler } from 'react';
import PropTypes from 'prop-types';

interface CounterPropTypes {}

type CounterHandlerTypes = MouseEventHandler<HTMLButtonElement>;

const Counter = (props: CounterPropTypes) => {
  const [value, setValue] = useState(0);

  const handleIncrement: CounterHandlerTypes = (e) => {
    setValue(value + 1);
  };

  const handleDecrement: CounterHandlerTypes = (e) => {
    setValue(value - 1);
  };

  return (
    <div>
      <div>
        <a>Counter: </a>
        <span>{value}</span>
      </div>
      <div>
        <span>actions</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

Counter.defaultProps = {};
Counter.propTypes = {};

export default Counter;
