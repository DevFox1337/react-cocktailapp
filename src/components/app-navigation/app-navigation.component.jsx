import { NavLink } from "react-router-dom"
import links from "../../data/links.json"
import "./_app-navigation.scss"

const AppNavigation = ({ toggleNav }) => {
  return (
    <nav className='app-navigation'>
      {links.map(({ to, text, icon }) => (
        <NavLink onClick={toggleNav} className='app-navigation__link' key={to} to={to}>
          <div className='app-navigation__link-text'>
            <span className='material-symbols-outlined app-navigation__icon'>{icon}</span>
            {text}
          </div>
          <span className='material-symbols-outlined app-navigation__chevron'>
            chevron_right
          </span>
        </NavLink>
      ))}
    </nav>
  )
}

export default AppNavigation
