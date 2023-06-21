import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import FilterDropdown from '../FilterDropDown/FilterDropdown';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
const apiKey = import.meta.env.VITE_MOVIELIST_KEY
console.log(FilterDropdown);
const MovieList = () => {
    // useState Returns a stateful value, and a function to update it.
    const [movies, setMovies] = useState([])
    const [filter, setFilter] = useState("popular")
    // useEffect is a hook
    useEffect(() => {
        const getMovieAPI = async () => {
            try {
                console.log(filter);
                const response = await fetch("https://api.themoviedb.org/3/movie/"+ filter+"?api_key=" + apiKey);
                const movieData = await response.json();
                // setMovies-Function uppdates the data in movies variable
                setMovies(movieData.results);
                console.log(movieData.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        getMovieAPI();
    }, [filter]);

    return (
        <div className="movieList--Wrap">
            <FilterDropdown filter={filter} setFilter={setFilter} />
            <div className="movieList--Div">
                {movies.map((movie) => (
                    <NavLink key={movie.id} to={"/" + movie.id}>
                        <MovieCard movies={movie} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
