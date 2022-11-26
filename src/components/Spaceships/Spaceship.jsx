import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Spaceship({ id, name, model, passengers }) {
  return (
    <StyledSpaceship to={`/spaceships/${id}`}>
      <SpaceshipName>{name}</SpaceshipName>
      <SpaceshipDetails>
        <SpaceshipLabel>{model}</SpaceshipLabel>
        <SpaceshipLabel>{passengers}</SpaceshipLabel>
      </SpaceshipDetails>
    </StyledSpaceship>
  );
}

const StyledSpaceship = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SpaceshipName = styled.span`
  display: block;
  font-weight: 600;
`;

const SpaceshipDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SpaceshipLabel = styled.span`
  font-size: 14px;
`;
