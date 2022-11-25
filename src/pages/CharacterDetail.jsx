import { useParams } from "react-router-dom";
import useGetCharacterById from "../hooks/useGetCharacterById";

export default function CharacterDetail() {
  // Obtener parámetro id, que se envía por la ruta.
  const { id } = useParams();
  // Obtener información del character por medio del id, utilizando el hook
  const { character } = useGetCharacterById(id);

  // Si hay Character renderizará todo lo que está dentro, sino una etiqueta <p>
  return character ? (
    <div>
      <span>{character.name}</span>
      <span>{character.birth_year}</span>
      <span>{character.gender}</span>
    </div>
  ) : <p>Loading...</p>
}