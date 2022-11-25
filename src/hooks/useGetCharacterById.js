// En formato de js porque no tendrá render
import { useEffect, useState } from 'react';
// URL
const SWAPI_URL = 'https://swapi.dev/api';

// Un único parámetro que será el id del personaje
export default function useGetCharacterById(id) {
  const [character, setCharacter] = useState();

  // - useEffect para fetch de datos:
  useEffect(() => {
    // Si hay id que haga la petición
    if (id) {
      fetch(`${SWAPI_URL}/people/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setCharacter(data);
        });
    }
  }, [id]); // dependencia en el identificador

  return {
    character,
  };
}
