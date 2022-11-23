import React from 'react'
import { Link } from 'react-router-dom'



function Form({hideSideBar}) {
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