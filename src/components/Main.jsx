import React, { useState, useEffect } from "react"
import { Preloader } from "./Preloader";
import { Movies } from "./Movies";
import { Search } from "./Search";
export const Main = () => {

    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        fetch('https://www.omdbapi.com/?apikey=78584b3c&s=matrix')
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }, [])

    const searchMovies = (str,type="all") => {
        fetch(`https://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
    }

    return (
        <main className="container content">
            <Search searchMovies={searchMovies} />
            {movies ? movies.length ? (
                <Movies movies={movies} />
            ) : <Preloader />:<h3>Nothis</h3>}

        </main>
    )
}
