import { createContext, useContext, useState } from 'react';

// Crear contexto
const GlobalContext = createContext();

// Definir proveedor del contexto que recibirá un children
export const GlobalProvider = ({ children }) => {
  // Hook para definir usuario
  const [user, setUser] = useState();

  const mockUser = () => {
    setUser({
      name:'Sonia',
      email: 'sv@gmail.com'
    })
  }

  return (
    <GlobalContext.Provider value={{ user, tryUser: mockUser, }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Exportar para uso global del contexto
export const useGlobalContext = () => useContext(GlobalContext);
