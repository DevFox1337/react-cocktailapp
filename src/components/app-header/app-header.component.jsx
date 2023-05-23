import AppNavigation from "../app-navigation/app-navigation.component"
import TabletNavigation from "../app-navigation/tablet-navigation/tablet-navigation.component"
import NavToggle from "../nav-toggle/nav-toggle.component"
import SearchBar from "../search-bar/search-bar.component"
import SearchToggle from "../search-toggle/search-toggle.component"
import "./_app-header.scss"

const AppHeader = ({ isNavOpen, toggleNav, isSearchOpen, toggleSearch }) => {

  function handleNavToggle() {
    if (isSearchOpen) {
      toggleSearch()
    }
    toggleNav()
  }

  function handleSearchToggle() {
    if (isNavOpen) {
      toggleNav()
    }
    toggleSearch()
  }

  return (
    <div className='app-header'>
      <span className='app-header__logo'>Drinks4U</span>
      <TabletNavigation />
      {isNavOpen && <AppNavigation toggleNav={toggleNav} />}
      {isSearchOpen && <SearchBar toggleSearch={toggleSearch} />}
      <SearchToggle isSearchOpen={isSearchOpen} toggleSearch={handleSearchToggle} />
      <NavToggle isNavOpen={isNavOpen} toggleNav={handleNavToggle} />
    </div>
  )
}

export default AppHeader
