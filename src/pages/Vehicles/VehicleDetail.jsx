import { useParams } from 'react-router-dom';
import useGetVehicleById from '../../hooks/Vehicles/useGetVehicleById';

export default function VehicleDetail() {
  const { id } = useParams();

  const { vehicle } = useGetVehicleById(id);

  return vehicle ? (
    <div>
      <span>{vehicle.name}</span>
      <span>{vehicle.model}</span>
      <span>{vehicle.passengers}</span>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
