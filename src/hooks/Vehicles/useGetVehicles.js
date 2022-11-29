import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetVehicles(page = 1) {
  const [vehicles, setVehicles] = useState([]);

  const [pagination, setPagination] = useState({
    next: false,
    previous: false,
  });

  useEffect(() => {
    fetch(`${SWAPI_URL}/vehicles/?page=${page}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((obj) => ({
          ...obj,
          id: obj.url.split('/')[5],
        }));
        setVehicles(results);
        setPagination({
          ...pagination,
          next: !!data.next,
          previous: !!data.previous,
        });
      });
  }, [page]);

  return {
    vehicles,
    previous: pagination.previous,
    next: pagination.next,
  };
}
