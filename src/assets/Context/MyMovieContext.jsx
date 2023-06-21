import { createContext, useContext, useState } from "react";

const MyMovieContext = createContext(null)
export const useMyMoviesContext = () => useContext(MyMovieContext)

const MyMoviesProvider = ({ children }) => {
    const [myMovies, setMyMovies] = useState([])

    const addMovie = (movie) => {
        setMyMovies([...myMovies, movie])
    }

    const removeMovie = (movieId) => {
        const newMovieList = myMovies.filter((m) => m.id !== movieId)
        setMyMovies(newMovieList)
    }
    const hasSeenMovie = (movieId) => {
        return myMovies.some((m) => m.id === movieId)
    }

    return (
        <MyMovieContext.Provider
            value={{ myMovies, addMovie, removeMovie, hasSeenMovie }}>
            {children}
        </MyMovieContext.Provider>
    )
}


export default MyMoviesProvider