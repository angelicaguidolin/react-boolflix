import { useState } from "react";
import { useAppDataContext } from "../contexts/AppDataContexts";
import axios from "axios";
export default function SearchBar(){
const [search, setSearch]= useState([])
const { setMovies } = useAppDataContext()
const handleSearch=(e)=>{
    e.prevetDeafault();
}
return(
    <>
    <form onSubmit={handleSearch}>
        <input type="search" placeholder="digita il titolo" value={search} onChange={(e)=>setSearch(e.target.value)} />
        <button type="submit">Cerca</button>
    </form>
    </>
)
}