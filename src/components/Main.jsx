import { useAppDataContext } from "../contexts/AppDataContexts";
import StarsVote from "./StarsVote";
export default function Main() {
    const { movies } = useAppDataContext();
  
    return (
      <main>
        <h2>Lista Films</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3> {movie.type}
            <ul>
                <li><img src={movie.poster_path} alt={movie.title} width="100" /></li>
                <li>lingua:<img src={movie.flag} width="30"/></li>
                <li>{movie.original_title}</li>
                <li><StarsVote vote={movie.vote_average} /></li>
            </ul>
            </li>
          ))}
        </ul>
      </main>
    );
  }