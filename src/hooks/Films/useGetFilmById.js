import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetFilmById(id) {
  const [film, setFilm] = useState();

  useEffect(() => {
    if (id) {
      fetch(`${SWAPI_URL}/films/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setFilm(data);
        });
    }
  }, [id]);

  return {
    film,
  };
}
