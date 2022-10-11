import React from 'react'
import Header from '../Header/Header'
import "./hero.css"
import hero from "../../images/hero-image.svg"



function Hero() {
  return (
    <div className='hero'>
      <Header />
      <div className="container">
        <div className="left">
          <div className="top">
            <p className='text'>WELCOME TO FIXBYTE</p>
            <p className='name'>World Leading Data Management Agency</p>
            <p className='description'>Data planing without stress and management.Fixbyte helps you work smart than others.</p>
          </div>
          <div className="bottom">
            <form>
              <input type="text" placeholder='Type your email...' className='mail' />
              <button className='button'>Get Started</button>
            </form>
          </div>

        </div>
        <div className="right">
            <img src={hero} alt="hero_image" />
        </div>
      </div>
    </div>
  )
}

export default Hero