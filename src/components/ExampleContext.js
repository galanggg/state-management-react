import React from 'react';
import { initialState } from '../utils/initialState';
import { ADD, DELETE, RESET } from '../utils/constant';

export const TodoContext = React.createContext();

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

export const TodoProvider = ({ children }) => {
  const [items, dispatch] = React.useReducer(reducer, initialState);
  const addItem = (ref) => {
    dispatch({
      type: ADD,
      name: ref.current.value,
    });
  };

  const deleteItem = (index) => {
    dispatch({ type: DELETE, index });
  };

  const resetItem = () => {
    dispatch({ type: RESET });
  };

  const value = { items, addItem, deleteItem, resetItem };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
