import React from 'react';
import {
  reducer,
  initialState,
  useThunkReducer,
  fetchCharacters,
} from '../utils/useThunkReducer';
import CharacterList from './CharacterList';

const ExampleThunkReducer = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  const { characters } = state;

  React.useEffect(() => {
    dispatch((dispatch) => {});
  }, []);

  return (
    <div className="characters">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <section>
        <button onClick={() => dispatch(fetchCharacters)}>
          Fetch Characters
        </button>
        <CharacterList characters={characters} />
      </section>
    </div>
  );
};

export default ExampleThunkReducer;
