import { useEffect, useState } from 'react';

const SWAPI_URL = 'https://swapi.dev/api';

export default function useGetVehicleById(id) {
  const [vehicle, setVehicle] = useState();

  useEffect(() => {
    if (id) {
      fetch(`${SWAPI_URL}/vehicles/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setVehicle(data);
        });
    }
  }, [id]);

  return {
    vehicle,
  };
}
