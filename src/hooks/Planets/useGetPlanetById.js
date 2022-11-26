import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetPlanetById(id) {
  const [planet, setPlanet] = useState();

  useEffect(() => {
    if (id) {
      fetch(`${SWAPI_URL}/planets/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setPlanet(data);
        });
    }
  }, [id]);

  return {
    planet,
  };
}
