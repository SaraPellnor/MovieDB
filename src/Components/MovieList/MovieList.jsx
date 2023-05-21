import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react';
import FilterDropdown from '../FilterDropDown/FilterDropdown';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
const apiKey = import.meta.env.VITE_MOVIELIST_KEY

const MovieList = () => {
    // useState Returns a stateful value, and a function to update it.
    const [movies, setMovies] = useState([])
    // useEffect is a hook
    useEffect(() => {
        const getMovieAPI = async () => {
            try {

                const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=" + apiKey);
                const movieData = await response.json();
                // setMovies-Function uppdates the data in movies variable
                setMovies(movieData.results);
                console.log(movieData.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        getMovieAPI();
    }, []);

    return (
        <div className="movieList--Wrap">
            <FilterDropdown />
            <div className="movieList--Div">
                {movies.map((movie) => (
                    <NavLink
                        key={movie.id}
                        to={"/" + movie.id}
                        className="movie"
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}>
                        <MovieCard to={"/" + movie.id} key={movie.id} movie={movie} />
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
