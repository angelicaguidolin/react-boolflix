//PAGINE
import Header from "./components/Header"
import Main from "./components/Main"
import SearchBar from "./components/SearchBar"
//CONTEXTS
import { AppDataProvider } from "./contexts/AppDataContexts"
export default function App(){
  return(
    <>
    <AppDataProvider>
    <Header />
    <Main />
    </AppDataProvider>
    </>
  )
}