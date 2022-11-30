import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetFilms(page = 1) {
  const [films, setFilms] = useState([]);

  const [pagination, setPagination] = useState({
    next: false,
    previous: false,
  });

  useEffect(() => {
    fetch(`${SWAPI_URL}/films/?page=${page}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((obj) => ({
          ...obj,
          id: obj.url.split('/')[5],
        }));
        setFilms(results);
        setPagination({
          ...pagination,
          next: !!data.next,
          previous: !!data.previous,
        });
      });
  }, [page]);

  return {
    films,
    previous: pagination.previous,
    next: pagination.next,
  };
}
