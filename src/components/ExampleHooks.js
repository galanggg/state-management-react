import React from 'react';
import { useLocalStorage } from '../utils/useLocalStorage';

function ExampleHooks({ max, step }) {
  const [state, setState] = useLocalStorage(0, 'count');
  const countRef = React.useRef();

  // let message = '';

  if (countRef.current < state) return 'Higher';
  if (countRef.current > state) return 'Lower';

  countRef.current = state;

  const increment = () => {
    setState((c) => {
      if (c >= max) {
        return 0;
      } else {
        return c + step;
      }
    });
  };

  const decrement = () => {
    setState(state - 1);
  };

  const resetValue = () => {
    setState(0);
  };

  return (
    <div className="App">
      <h1>{state}</h1>
      <div className="button-group">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={resetValue}>Reset Value</button>
      </div>
    </div>
  );
}

export default ExampleHooks;
