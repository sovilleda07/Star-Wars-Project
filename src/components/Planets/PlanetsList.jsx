import { useState } from 'react';
import styled from 'styled-components';
import useGetPlanets from '../../hooks/Planets/useGetPlanets';
import Container from '../Container';
import Paginator from '../Paginator';
import Planet from '../Planets/Planet';

export default function PlanetsList() {
  const [page, setPage] = useState(1);

  const { planets, next, previous } = useGetPlanets(page);

  // Manejo para paginación previa
  const handlePrev = () => {
    setPage(page - 1);
  };

  // Manejo para paginación siguiente
  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Container>
        <PlanetList>
          {planets.map((planet, idx) => (
            <PlanetListItem key={idx}>
              <Planet {...planet} />
            </PlanetListItem>
          ))}
        </PlanetList>
        <Paginator
          {...{
            page,
            next,
            previous,
            handleNext,
            handlePrev,
          }}
        />
      </Container>
    </>
  );
}

const PlanetList = styled.ul`
  margin: 0;
  padding: 0;
`;

const PlanetListItem = styled.li`
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border: 0; 
  }
`;
