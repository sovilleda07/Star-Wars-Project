import { useParams } from 'react-router-dom';
import useGetSpecieById from '../../hooks/Species/useGetSpecieById';

export default function SpecieDetail() {
  const { id } = useParams();

  const { specie } = useGetSpecieById(id);

  return specie ? (
    <div>
      <span>{specie.name}</span>
      <span>{specie.classification}</span>
      <span>{specie.language}</span>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
