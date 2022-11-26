import { useParams } from 'react-router-dom';
import useGetSpaceshipById from '../../hooks/Spaceships/useGetSpaceshipById';

export default function SpaceshipDetail() {
  const { id } = useParams();

  const { spaceship } = useGetSpaceshipById(id);

  return spaceship ? (
    <div>
      <span>{spaceship.name}</span>
      <span>{spaceship.model}</span>
      <span>{spaceship.passengers}</span>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
