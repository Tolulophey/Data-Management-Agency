import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
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
        {/* <a href="/#about">
          <li>About</li>
        </a> */}
        <Link
            to="/#about"
          // to={{
          //     pathname: "/",
          //     hash: "#about",
          //     state: { fromHome: true }
          //   }}
        >
          <li>About</li>
        </Link>
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