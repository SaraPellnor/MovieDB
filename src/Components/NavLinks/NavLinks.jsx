import { NavLink } from "react-router-dom"

const NavLinks = () => {

    return (
<ul>
      <li>
        <NavLink to="/">
          MOVIES
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          CONTACT
        </NavLink>
      </li>
    </ul>
    )
}

export default NavLinks