import { useGlobalContext } from "../contexts/Global";

export default function UserSwitch() {
  // Llamado al contexto global
  const { user, tryUser } = useGlobalContext();

  return user ? (
    <div>Hola {user.name}</div>
  ): <button onClick={() => tryUser()}>Try user</button>
}
