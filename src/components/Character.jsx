import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Character({ id, name, birth_year, gender }) {
  return (
    <StyledCharacter to={`/characters/${id}`}>
      <CharacterName>{name}</CharacterName>
      <CharacterDetails>
        <CharacterLabel>{birth_year}</CharacterLabel>
        <CharacterLabel>{gender}</CharacterLabel>
      </CharacterDetails>
    </StyledCharacter>
  );
}

// Estilizando el Link que es el StyledCharacter.
const StyledCharacter = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CharacterName = styled.span`
  display: block;
  font-weight: 600;
`;

const CharacterDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CharacterLabel = styled.span`
  font-size: 14px;
`;
