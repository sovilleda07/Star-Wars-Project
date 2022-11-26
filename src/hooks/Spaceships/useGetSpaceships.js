import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetSpaceships(page = 1) {
  const [spaceships, setSpaceships] = useState([]);

  const [pagination, setPagination] = useState({
    next: false,
    previous: false,
  });

  useEffect(() => {
    fetch(`${SWAPI_URL}/starships/?page=${page}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        // Mapeo de resultados para agregar el id del spaceship
        const results = data.results.map((obj) => ({
          ...obj,
          id: obj.url.split('/')[5],
        }));
        setSpaceships(results);
        setPagination({
          ...pagination,
          next: !!data.next,
          previous: !!data.previous,
        });
      });
  }, [page]);

  return {
    spaceships,
    previous: pagination.previous,
    next: pagination.next,
  };
}
