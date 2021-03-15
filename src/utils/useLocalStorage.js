import React from 'react';

export const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage);
    return initialState;
  };

  const [value, setValue] = React.useState(get().value);

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value]);

  return [value, setValue];
};
