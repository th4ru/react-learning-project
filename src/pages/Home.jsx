import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import "../css/Home.css";


function Home() {
    const [searchQuery, setSearchQuery]=useState("");

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "Matrix", release_date: "1998" },
    ];

    const handleSearch =(e) => {
        e.preventDefault()
        alert(searchQuery)

    };
    
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search for movies.." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
