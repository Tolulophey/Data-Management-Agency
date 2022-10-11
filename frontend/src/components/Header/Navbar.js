import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {MenuContext} from "../Header/Header"

function Navbar() {
  const menu = useContext(MenuContext)
  const showMenu = menu.showMenu;
  const showSideBar = menu.show;
  const hideSideBar = menu.hide;
    
  return (
    <nav className={showMenu ? "nav active" : "nav"}>
        <div className="icon">
            <FaIcons.FaBars
            onClick={showSideBar}
            />
            <AiIcons.AiOutlineClose 
            onClick={hideSideBar}
            />
        </div>
        <ul className='nav_options ' onClick={hideSideBar}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/#about">
            <li>About</li>
          </Link>
          <Link to="/pricing">
            <li>Pricing</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
  )
}

export default Navbar