import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Film({ id, title, director, release_date }) {
  return (
    <StyledFilm to={`/films/${id}`}>
      <FilmName>{title}</FilmName>
      <FilmDetails>
        <FilmLabel>{director}</FilmLabel>
        <FilmLabel>{release_date}</FilmLabel>
      </FilmDetails>
    </StyledFilm>
  );
}

const StyledFilm = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const FilmName = styled.span`
  display: block;
  font-weight: 600;
`;

const FilmDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FilmLabel = styled.span`
  font-size: 14px;
`;
