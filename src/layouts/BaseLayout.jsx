import { Outlet } from 'react-router-dom';
import Container from '../components/Container';
import Navigation from '../components/Navigation';

// Será nuestra navegación base
export default function BaseLayout() {
  return (
    <>
      <Navigation />
      {/* Se montarán o colocaran todos los childs que se puedan tener en una sola ruta */}
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
