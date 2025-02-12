import { useAppDataContext } from "../contexts/AppDataContexts";
export default function Main() {
    const { movies } = useAppDataContext();
  
    return (
      <main>
        <h2>Lista Films</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </main>
    );
  }