import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {MenuContext} from "../Header/Header"



function Form() {
  const menu = useContext(MenuContext)
  const hideSideBar = menu.hide;
  return (
    <div className="forms" onClick={hideSideBar}>
        <Link to="/login">
            <button>Login</button>
        </Link>
        <Link to="/signup">
            <button>Sign up</button>
        </Link>
    </div> 
  )
}

export default Form