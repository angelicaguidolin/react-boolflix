import { useAppDataContext } from "../contexts/AppDataContexts";
export default function Main(){
    const { movies }= useAppDataContext()
    console.log(movies)
    return(
        <main>
            <h2>RISULTATI RICERCA</h2>
            <ul>
                {movies.map((movie)=>(
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </main>
    )
}