import NavLinks from "./NavLinks"
import MyMovies from "./MyMovies"
import "./header.css"

const Header = () => {

    return (
        <header>
            <h1>Movie<span>DB</span></h1>
            <div className="header-right--div">
                <NavLinks />
                <MyMovies />
            </div>
        </header>
    )
}

export default Header