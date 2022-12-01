import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Specie({ id, name, classification, language }) {
  return (
    <StyledSpecie to={`/species/${id}`}>
      <SpecieName>{name}</SpecieName>
      <SpecieDetails>
        <SpecieLabel>{classification}</SpecieLabel>
        <SpecieLabel>{language}</SpecieLabel>
      </SpecieDetails>
    </StyledSpecie>
  );
}

const StyledSpecie = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SpecieName = styled.span`
  display: block;
  font-weight: 600;
`;

const SpecieDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SpecieLabel = styled.span`
  font-size: 14px;
`;
