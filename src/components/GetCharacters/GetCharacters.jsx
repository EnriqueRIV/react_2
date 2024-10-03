import React, { useState, useEffect } from 'react';
import GetCharacter from '../GetCharacter/GetCharacter';
import './GetCharacters.css';

const GetCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getInfoCharacters = async () => {
      const chara = await fetch(`https://rickandmortyapi.com/api/character`);
      const charactersJson = await chara.json();
      const charactes = charactersJson.results;
      setCharacters(charactes);
    };
    getInfoCharacters();
  }, []);

  return (
    <>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <GetCharacter character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetCharacters;
