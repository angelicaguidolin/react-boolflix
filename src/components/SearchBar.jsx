import { useState } from "react";
import { useAppDataContext } from "../contexts/AppDataContexts";
import axios from "axios";
export default function SearchBar(){
const [search, setSearch]= useState([])
const { setMovies } = useAppDataContext()
const flagAPI="https://flagcdn.com/w320"

const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "cecf721b5ffa9cf6f3534e54060b5d9c",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => {
        const movies= res.data.results;
        const languageFlag=movies.map((movie)=>({
          ...movie, flag:`${flagAPI}/${movie.original_language}.png`,
        }));
        setMovies(languageFlag)
      });

    
     
      
  };
 
  return(
    
    <form onSubmit={handleSearch}>
    <input
      name="search"
      type="search"
      placeholder="digita il titolo..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button type="submit">Cerca</button>
  </form>
    
)
}