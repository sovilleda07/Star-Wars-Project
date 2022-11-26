import { useState } from 'react';
import styled from 'styled-components';
import useGetSpaceships from '../../hooks/Spaceships/useGetSpaceships';
import Container from '../Container';
import Paginator from '../Paginator';
import Spaceship from '../Spaceships/Spaceship';

export default function SpaceshipsList() {
  const [page, setPage] = useState(1);

  const { spaceships, next, previous } = useGetSpaceships(page);

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
        <SpaceshipList>
          {spaceships.map((spaceship, idx) => (
            <SpaceshipListItem key={idx}>
              <Spaceship {...spaceship} />
            </SpaceshipListItem>
          ))}
        </SpaceshipList>
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

const SpaceshipList = styled.ul`
  margin: 0;
  padding: 0;
`;

const SpaceshipListItem = styled.li`
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border: 0; 
  }
`;
