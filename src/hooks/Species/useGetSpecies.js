import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetSpecies(page = 1) {
  const [species, setSpecies] = useState([]);

  const [pagination, setPagination] = useState({
    next: false,
    previous: false,
  });

  useEffect(() => {
    fetch(`${SWAPI_URL}/species/?page=${page}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((obj) => ({
          ...obj,
          id: obj.url.split('/')[5],
        }));
        setSpecies(results);
        setPagination({
          ...pagination,
          next: !!data.next,
          previous: !!data.previous,
        });
      });
  }, [page]);

  return {
    species,
    previous: pagination.previous,
    next: pagination.next,
  };
}
