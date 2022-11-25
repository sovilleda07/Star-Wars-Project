// En formato de js porque no tendrá render
import { useEffect, useState } from 'react';
// URL
const SWAPI_URL = 'https://swapi.dev/api';

// Un único parámetro que será la página actual
export default function useGetCharacters(page = 1) {
  // Hook para almacenar los personajes
  const [characters, setCharacters] = useState([]);
  // Hook para control de paginación
  const [pagination, setPagination] = useState({
    next: false,
    previous: false,
  });

  // - useEffect para fetch de datos:
  // Necesita la información del pagination para actualizar al cambiar
  useEffect(() => {
    // Hacia donde vamos a hacer la petición
    // Inicializador del request con el método HTTP
    fetch(`${SWAPI_URL}/people/?page=${page}`, { 
      method: 'GET',
    })
      .then((res) => res.json()) // Convertir la respuesta en json devuelve otra promesa
      .then((data) => {
        // Set los personajes
        setCharacters(data.results);
        // Set la paginación
        setPagination({
          ...pagination,
          next: !!data.next, // !! para doble validación
          previous: !!data.previous,
        });
      }); // Ahora si es el objeto con la información
  }, [page]); // Con dependencia en el cambio de página.

  return {
    characters,
    previous: pagination.previous,
    next: pagination.next,
  };
}
