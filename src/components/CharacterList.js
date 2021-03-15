import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
