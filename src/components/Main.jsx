import { useAppDataContext } from "../contexts/AppDataContexts";
export default function Main() {
    const { movies } = useAppDataContext();
  
    return (
      <main>
        <h2>Lista Films</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}
            <ul>
                <li>{movie.original_language}</li>
                <li>{movie.original_title}</li>
                <li>{movie.vote_average}</li>
            </ul>
            </li>
          ))}
        </ul>
      </main>
    );
  }