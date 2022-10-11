import React from 'react'
import './footer.css'
import data from './data'
import {Link} from "react-router-dom"
import logo from "../../images/logo.svg"


function Footer() {
  const plans = data.plans
  const teams = data.teams
  const usefulLinks = data.usefulLinks
  const socialMedia = data.socialMedias
  return (
    <footer className='footer'>
      <div className="top">
        <div className="our-plans">
          <p>Fixbyte Plan</p>
          <div className="plans">
            {plans.map((item, index)=>{
              return <div className="plan" key={index+1}>
                        <Link to={item.link}>
                          <p>{item.plan}</p>
                        </Link>
                      </div>
            })}
          </div>
        </div>
        <div className="our-team">
          <p>By Team</p>
          <div className="teams">
            {teams.map((item, index)=>{
              return <div className="team" key={index+1}>
                        <Link to={item.link}>
                          <p>{item.team}</p>
                        </Link>
                      </div>
            })}
          </div>
        </div>
        <div className="useful-links">
          <p>Useful Links</p>
          <div className="links">
            {usefulLinks.map((item, index)=>{
              return <div className="link" key={index+1}>
                        <Link to={item.link}>
                          <p>{item.page}</p>
                        </Link>
                      </div>
            })}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="social-media">
            {socialMedia.map((item, index)=>{
              return <a href={item.link} className="media" key={index+1}>
                          <img src={item.image} alt="icon" />
                      </a>
            })}
        </div>
      </div>
    </footer>
  )
}

export default Footer