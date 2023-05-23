import { NavLink } from "react-router-dom"
import links from "../../../data/links.json"
import "./_tablet-navigation.scss"

const TabletNavigation = () => {
  return (
    <nav className='tablet-navigation'>
      {links.map(({ to, text }) => (
        <NavLink className='tablet-navigation__link' key={to} to={to}>
          <div className='tablet-navigation__link-text'>
            {text}
          </div>
        </NavLink>
      ))}
    </nav>
  )
}

export default TabletNavigation
