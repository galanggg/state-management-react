import React from 'react';
import { useFetch } from '../utils/useFetch';
import CharacterList from './CharacterList';

const ExampleUseEffect = () => {
  const [response, loading, error] = useFetch(
    'https://star-wars-characters.glitch.me/api/characters'
  );
  const characters = response;
  console.log(characters);
  return (
    <div className="container">
      <h1>Display the Character of Star Wars</h1>
      {loading ? (
        <p>Load the data..</p>
      ) : (
        <CharacterList characters={characters.results} />
      )}
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default ExampleUseEffect;
