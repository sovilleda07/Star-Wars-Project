import { useState } from 'react';
import styled from 'styled-components';
import useGetVehicles from '../../hooks/Vehicles/useGetVehicles';
import Container from '../Container';
import Paginator from '../Paginator';
import Vehicle from '../Vehicles/Vehicle';

export default function VehiclesList() {
  const [page, setPage] = useState(1);

  const { vehicles, next, previous } = useGetVehicles(page);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Container>
        <VehicleList>
          {vehicles.map((vehicle, idx) => (
            <VehicleListItem key={idx}>
              <Vehicle {...vehicle} />
            </VehicleListItem>
          ))}
        </VehicleList>
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

const VehicleList = styled.ul`
  margin: 0;
  padding: 0;
`;

const VehicleListItem = styled.li`
  list-style: none;
  padding: 12px 0;
  border-bottom: 1px solid #2e2e2e;
  &:last-child {
    border: 0; 
  }
`;