import React, {useContext, useState} from 'react'
import "../form.css"
import logo from "../../../images/logo.svg"
import facebook from "../../../images/facebook_3rdp.svg"
import google from "../../../images/google_3rdP.svg"
import {Link, useNavigate} from "react-router-dom"
import { UserContext } from '../../../App'

function Login() {
  const navigate = useNavigate()
  const {setAuthenticated} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassowrd] = useState("")
  const [error, setError] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    // const form = document.querySelector("form")
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((user) => user.email === email);
    // form.submit()
    if (user && user.password === password) {
        localStorage.setItem("auth", true)
        localStorage.setItem("user", JSON.stringify(user))
        setAuthenticated(true)
        navigate("/dashboard");
    } else {
      setError(true)
    }
  }
  return (
    <div className='form-page'>
        <div className="left">
            <img src={logo} alt="logo" />
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" placeholder='Email Address' onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" name="password" placeholder='password' onChange={(e)=> setPassowrd(e.target.value)}/>
              <input type="submit" value="Login" />
            </form>
            {error && 
            <div className="error">
              The detail you entered is incorrect
            </div>}
            <p>Not a member? 
              <span>
                <Link to="/signup">Create account</Link>
              </span>
            </p>
            <div className="alternatives">
              <p>-OR-</p>
              <div className="alternates">
                <div className="google">
                  <img src={google} alt="google" />
                  <p>Continue with Google</p>
                </div>
                <div className="facebook">
                  <img src={facebook} alt="facebook" />
                  <p>Continue with Facebook</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Login