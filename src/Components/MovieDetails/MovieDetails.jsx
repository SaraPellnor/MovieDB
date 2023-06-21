import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const apiKey = import.meta.env.VITE_MOVIELIST_KEY
const MovieDetails = () => {
    const [movie, setMovie] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const getSingelMovie = async () => {
            try {

                const response = await fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + apiKey);
                const movieData = await response.json();
                // setMovies-Function uppdates the data in movies variable
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        getSingelMovie();
    }, [id]);

    return (
        <div>
            <h1 style={{ color: "whitesmoke" }}>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
            <MarkAsSeenBtn />
        </div>
    )

}


export default MovieDetails

