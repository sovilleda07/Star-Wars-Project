import { useState } from 'react';
import styled from 'styled-components';
import useGetSpecies from '../../hooks/Species/useGetSpecies';
import Container from '../Container';
import Paginator from '../Paginator';
import Specie from '../Species/Specie';

export default function SpeciesList() {
  const [page, setPage] = useState(1);

  const { species, next, previous } = useGetSpecies(page);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Container>
        <SpecieList>
          {species.map((specie, idx) => (
            <SpecieListItem key={idx}>
              <Specie {...specie} />
            </SpecieListItem>
          ))}
        </SpecieList>
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

const SpecieList = styled.ul`
  margin: 0;
  padding: 0;
`;

const SpecieListItem = styled.li`
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border: 0; 
  }
`;
