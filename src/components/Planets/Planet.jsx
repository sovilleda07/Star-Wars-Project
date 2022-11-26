import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Planet({ id, name, climate, population }) {
  return (
    <StyledPlanet to={`/planets/${id}`}>
      <PlanetName>{name}</PlanetName>
      <PlanetDetails>
        <PlanetLabel>{climate}</PlanetLabel>
        <PlanetLabel>{population}</PlanetLabel>
      </PlanetDetails>
    </StyledPlanet>
  );
}

const StyledPlanet = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PlanetName = styled.span`
  display: block;
  font-weight: 600;
`;

const PlanetDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const PlanetLabel = styled.span`
  font-size: 14px;
`;
