import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetSpecieById(id) {
  const [specie, setSpecie] = useState();

  useEffect(() => {
    if (id) {
      fetch(`${SWAPI_URL}/species/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setSpecie(data);
        });
    }
  }, [id]);

  return {
    specie,
  };
}
