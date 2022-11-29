import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Vehicle({id, name, model, passengers}){
  return(
    <StyledVehicle to={`/vehicles/${id}`}>
      <VehicleName>{name}</VehicleName>
      <VehicleDetails>
        <VehicleLabel>{model}</VehicleLabel>
        <VehicleLabel>{passengers}</VehicleLabel>
      </VehicleDetails>
    </StyledVehicle>
  );
}

const StyledVehicle = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const VehicleName = styled.span`
  display: block;
  font-weight: 600;
`;

const VehicleDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const VehicleLabel = styled.span`
  font-size: 14px;
`;
