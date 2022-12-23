import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {MenuContext} from "../Header/Header"
import Form from './Form'


function Navbar() {
  const menu = useContext(MenuContext)
  const showMenu = menu.showMenu;
  const showSideBar = menu.show;
  const hideSideBar = menu.hide;
    
  return (
    <nav className={showMenu ? "nav active" : "nav"}>
      <div className="icon">
        <div className="faBar">
          <FaIcons.FaBars
          onClick={showSideBar}
          />
        </div>
        <div className="closeBar">
          <AiIcons.AiOutlineClose 
          onClick={hideSideBar}
          />
        </div>
      </div>
      <ul className='nav_options ' onClick={hideSideBar}>
        <Link to="/">
          <li>Home</li>
        </Link>
        {/* check this and apply to all other part of homepage */}
        <HashLink smooth to="/#about">
          <li>About</li>
        </HashLink>
        <HashLink smooth to="/#testimonial">
          <li>Testimonial</li>
        </HashLink>
        <Link to="/pricing">
          <li>Pricing</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <Form 
        hideSideBar={hideSideBar}
      />
    </nav>
  )
}

export default Navbar