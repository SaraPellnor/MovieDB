import NavLinks from "./NavLinks"
import MyMovies from "./MyMovies"

const Header = () => {

    return (
        <header>
            <h1>Movie DB</h1>
            <div className="header-right--div">
                <NavLinks />
                <MyMovies />
            </div>
        </header>
    )
}

export default Header