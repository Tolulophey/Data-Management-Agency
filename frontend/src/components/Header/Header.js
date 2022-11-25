import React, {useState, useEffect} from 'react'
import logo from "../../images/logo.svg"
// import Form from './Form'
import Navbar from './Navbar'
import './header.css'

export const MenuContext = React.createContext()

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const showSideBar = ()=> setShowMenu(!showMenu)
  const hideSideBar = ()=> setShowMenu(false)

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMenu ? "hidden" : "auto";
    }
  }, [showMenu])
  return (
    <div className='header'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <MenuContext.Provider value={{showMenu: showMenu, show: showSideBar, hide: hideSideBar}} >
          <Navbar />
        </MenuContext.Provider>
        
    </div>
  )
}

export default Header