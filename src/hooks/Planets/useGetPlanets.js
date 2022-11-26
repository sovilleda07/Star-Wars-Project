import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetPlanets(page = 1) {
  const [planets, setPlanets] = useState([]);

  const [pagination, setPagination] = useState({
    next: false,
    previous: false,
  });

  useEffect(() => {
    fetch(`${SWAPI_URL}/planets/?page=${page}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        // Mapeo de resultados para agregar el id del planet
        const results = data.results.map((obj) => ({
          ...obj,
          id: obj.url.split('/')[5],
        }));
        setPlanets(results);
        setPagination({
          ...pagination,
          next: !!data.next,
          previous: !!data.previous,
        });
      });
  }, [page]);

  return {
    planets,
    previous: pagination.previous,
    next: pagination.next,
  };
}
