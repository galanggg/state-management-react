import React from 'react';
import { TodoContext } from './ExampleContext';

function DisplayContext() {
  const inputRef = React.useRef();

  const { items, addItem, deleteItem, resetItem } = React.useContext(
    TodoContext
  );

  function handleSubmit(e) {
    e.preventDefault();
    addItem(inputRef);
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
            {item.name}
            <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => resetItem()}>RESET ALL</button>
    </>
  );
}
export default DisplayContext;
