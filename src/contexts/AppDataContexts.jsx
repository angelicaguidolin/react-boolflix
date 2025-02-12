import { createContext,useContext } from "react";
import { useState } from "react";
const AppDataContexts=createContext()

function AppDataProvider({children}){
    const [movies, setMovies]= useState([])
    return(
        <AppDataContexts.Provider value={(movies, setMovies)}>{children}</AppDataContexts.Provider>
    )
}
function useAppDataContext(){
    const context =useContext(AppDataContexts)
    return context
}
export{AppDataProvider,useAppDataContext}