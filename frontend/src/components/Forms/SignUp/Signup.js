import React, {useState, useContext, useEffect} from 'react'
import "../form.css"
import logo from "../../../images/logo.svg"
import facebook from "../../../images/facebook_3rdp.svg"
import google from "../../../images/google_3rdP.svg"
import {Link, useNavigate} from "react-router-dom"
import { UserContext } from '../../../App'

function Signup() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [cPassword, setCPassword] = useState("");
  const {authenticated} = useContext(UserContext)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: ""
  })
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    if(authenticated){
        navigate("/dashboard")
      }
    if(user.password !== user.cPassword && user.cPassword !== ""){
        setPasswordMatch(false)
      } else{
        setPasswordMatch(true)
      }

  }, [user.password, user.cPassword, authenticated, navigate])
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(user.name === "" || user.email === ""){
      setEmpty(true)
      return;
    }
    if(passwordMatch && user.password !== ""){
      const users = localStorage.getItem("users") || []
      localStorage.setItem("users", JSON.stringify([...users, user]))
      navigate("/login")
    }
  };

  return (
    <div className='form-page'>
        <div className="left">
            <img src={logo} alt="logo" />
        </div>
        <div className="form">
            <form onSubmit={handleSubmit}>
              <input type="text" name='name' placeholder='full name' onChange={(e) => setUser({...user, name: e.target.value})}/>
              <input type="email" name="email" placeholder='Email Address' onChange={(e) => setUser({...user, email: e.target.value})} />
              <input type="password" name="password" placeholder='password' onChange={(e) => setUser({...user, password: e.target.value})} />
              <input type="password" name="cpassword" placeholder='confirm password' onChange={(e) => setUser({...user, cPassword: e.target.value})} />
              {!passwordMatch && <p className='password'>passwords do not match</p>}
              <input type="submit" value="Create Account" />
            </form>
            <div className="error-messages">
              {empty && <p className='empty'>Name and Email</p>}
              {!passwordMatch && user.password !== "" && <p className="register">kindly confirm your password entered</p>}
            </div>
            <p>Already have an account? 
              <span>
                <Link to="/login">Log in</Link>
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

export default Signup