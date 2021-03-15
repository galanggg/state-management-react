import React from 'react';
import { initialState } from '../utils/initialState';
import { ADD, DELETE, RESET } from '../utils/constant';

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: state.length,
          name: action.name,
        },
      ];

    case DELETE:
      return state.filter((_, index) => index !== action.index);

    case RESET:
      return [];
    default:
      return state;
  }
}

function ExampleReducer() {
  const inputRef = React.useRef();
  const [items, dispatch] = React.useReducer(reducer, initialState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ADD,
      name: inputRef.current.value,
    });
    inputRef.current.value = '';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => dispatch({ type: DELETE, index })}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: RESET })}>RESET ALL</button>
    </>
  );
}

export default ExampleReducer;
