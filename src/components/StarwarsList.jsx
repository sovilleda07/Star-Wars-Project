import { useState } from 'react';
import styled from 'styled-components';
import useGetCharacters from '../hooks/useGetCharacters';
import Character from './Character';
import Container from './Container';
import Paginator from './Paginator';

export default function StarwarsList() {
  // Control de la paginación
  const [page, setPage] = useState(1);
  // Llamado a hook que realiza la petición, envíando como parámetro el número de página actual.
  const { characters, next, previous } = useGetCharacters(page);

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
        <CharacterList>
          {characters.map((character, idx) => (
            <CharacterListItem key={idx}>
              <Character {...character} />
            </CharacterListItem>
          ))}
        </CharacterList>
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

const CharacterList = styled.ul`
  margin: 0;
  padding: 0;
`;

const CharacterListItem = styled.li`
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border: 0; 
  }
`;
