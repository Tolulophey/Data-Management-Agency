import React from 'react'
import "../form.css"
import logo from "../../../images/logo.svg"
import facebook from "../../../images/facebook_3rdp.svg"
import google from "../../../images/google_3rdP.svg"
import {Link} from "react-router-dom"

function Login() {
  return (
    <div className='form-page'>
        <div className="left">
            <img src={logo} alt="logo" />
        </div>
        <div className="form">
            <form>
              <input type="email" name="email" placeholder='Email Address'/>
              <input type="password" name="password" placeholder='password' />
              <input type="button" value="Create Account" />
            </form>
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