import { useState } from "react";
import { useAppDataContext } from "../contexts/AppDataContexts";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { setMovies } = useAppDataContext();
  const flagAPI = "https://flagcdn.com/w320";
  const apiKey = "cecf721b5ffa9cf6f3534e54060b5d9c";

  const handleSearch = (e) => {
    e.preventDefault();

    const movieReq = axios.get("https://api.themoviedb.org/3/search/movie", {
      params: {
        api_key: apiKey,
        language: "it-IT",
        query: search,
      },
    });

    const seriesReq = axios.get("https://api.themoviedb.org/3/search/tv", {
      params: {
        api_key: apiKey,
        language: "it-IT",
        query: search,
      },
    });

    Promise.all([movieReq, seriesReq])
      .then(([movieRes, seriesRes]) => {
        const movies = movieRes.data.results.map((movie) => ({
          ...movie,
          type: "Film",
          title: movie.title,
          flag: `${flagAPI}/${movie.original_language}.png`,
        }));

        const series = seriesRes.data.results.map((serie) => ({
          ...serie,
          type: "Serie TV",
          title: serie.name,
          flag: `${flagAPI}/${serie.original_language}.png`,
        }));

        setMovies([...movies, ...series]); // Unisce i risultati e li salva nello stato
      })
      .catch((error) => {
        console.error("Errore durante la ricerca:", error);
      });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Digita il titolo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}