import { createContext, useContext, useState } from "react";
const AppDataContext = createContext()
function AppDataProvider({ children }) {
    const [movies, setMovies] = useState([]);
  
   
    return (
      <AppDataContext.Provider value={{ movies, setMovies}}>
        {children}
      </AppDataContext.Provider>
    );
  }
  function useAppDataContext() {
    return useContext(AppDataContext);
  }
  export { AppDataProvider, useAppDataContext };