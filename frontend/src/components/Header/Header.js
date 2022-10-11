import React, {useState} from 'react'
import logo from "../../images/logo.svg"
import Form from './Form'
import Navbar from './Navbar'
import './header.css'

export const MenuContext = React.createContext()

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const showSideBar = ()=> setShowMenu(!showMenu)
    const hideSideBar = ()=> setShowMenu(false)
  return (
    <div className='header'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <MenuContext.Provider value={{showMenu: showMenu, show: showSideBar, hide: hideSideBar}} >
          <Navbar />
          <Form />
        </MenuContext.Provider>
        
    </div>
  )
}

export default Header