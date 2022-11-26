import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetSpaceshipById(id) {
  const [spaceship, setSpaceship] = useState();

  useEffect(() => {
    if (id) {
      fetch(`${SWAPI_URL}/starships/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setSpaceship(data);
        });
    }
  }, [id]);

  return {
    spaceship,
  };
}
