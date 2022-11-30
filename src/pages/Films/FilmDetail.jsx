import { useParams } from 'react-router-dom';
import useGetFilmById from '../../hooks/Films/useGetFilmById';

export default function FilmDetail() {
  const { id } = useParams();

  const { film } = useGetFilmById(id);

  return film ? (
    <div>
      <span>{film.title}</span>
      <span>{film.director}</span>
      <span>{film.release_date}</span>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
