import { useState } from 'react';
import styled from 'styled-components';
import useGetFilms from '../../hooks/Films/useGetFilms';
import Container from '../Container';
import Film from '../Films/Film';
import Paginator from '../Paginator';

export default function FilmsList() {
  const [page, setPage] = useState(1);

  const { films, next, previous } = useGetFilms(page);

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
        <FilmList>
          {films.map((film, idx) => (
            <FilmListItem key={idx}>
              <Film {...film} />
            </FilmListItem>
          ))}
        </FilmList>
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

const FilmList = styled.ul`
  margin: 0;
  padding: 0;
`;

const FilmListItem = styled.li`
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border: 0; 
  }
`;
