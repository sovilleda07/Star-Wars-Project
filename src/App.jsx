import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import BaseLayout from './layouts/BaseLayout';

// Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';
import { GlobalProvider } from './contexts/Global';

// Será el router principal
function App() {
  return (
    <>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="characters" element={<Characters />} />
            <Route path="characters/:id" element={<CharacterDetail />} />
          </Route>
        </Routes>
      </GlobalProvider>
      <GlobalStyle />
    </>
  );
}

export default App;

// Estilos globales con Styled Component
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    outline: 0 none;
  }

  html {
    font-family: Inter, sans-serif;
  }
`;
