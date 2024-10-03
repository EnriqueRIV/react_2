import React, { useState } from 'react';
import './GetCharacter.css';

const GetCharacter = ({ character }) => {
  const [down, setDown] = useState(false);

  return (
    <div>
      <img
        className={down ? 'down' : 'up'}
        src={character.image}
        alt={character.name}
        onClick={() => setDown(!down)}
      />
      <h3>{character.name}</h3>
    </div>
  );
};

export default GetCharacter;
