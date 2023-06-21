import PropTypes from "prop-types"
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn"
import "./MovieCard.css"

const MovieCard = ({ movies }) => {

    return (
        <div className="movieCard">
            <div
                className="movieImg"
                style={{
                    backgroundImage: "url(https://image.tmdb.org/t/p/w500/" + movies.poster_path + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
            </div>
            <MarkAsSeenBtn />
        </div>
    )
}

MovieCard.propTypes = {
    movies: PropTypes.string.isRequired,
    
  }

export default MovieCard