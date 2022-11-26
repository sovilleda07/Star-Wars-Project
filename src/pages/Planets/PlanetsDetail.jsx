import { useParams } from 'react-router-dom';
import useGetPlanetById from '../../hooks/Planets/useGetPlanetById';

export default function PlanetDetail() {
  const { id } = useParams();

  const { planet } = useGetPlanetById(id);

  return planet ? (
    <div>
      <span>{planet.name}</span>
      <span>{planet.climate}</span>
      <span>{planet.population}</span>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
