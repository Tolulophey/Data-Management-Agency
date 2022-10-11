import React from 'react'
import './about.css'
import slack from "../../images/slack.svg"
import figma from "../../images/figma.svg"
import hubspot from "../../images/hubspot.svg"
import google from "../../images/google.svg"
import youtube from "../../images/youtube.svg"
import video from "../../images/video.svg"

function About() {
  const companies = [slack, figma, hubspot, google]
  return (
    <div className='about' id='about'>
      <div className="top">
        <p className='data_manager'>A data manager that keep all records intact with no data slip through the cracks</p>
        <p className="data">Easy user flow with lovely look, Fixtybte gives you a visual overview on your data in and out. This means no stress and better results. </p>
        <form>
              <input type="text" placeholder='Type your email...' className='mail' />
              <button className='button'>Get Started</button>
        </form>
        <div className="companies">
          <p>Companies we've worked with</p>
          <div className="company">
              {companies.map((company, index)=>{
              return <img src={company} alt={company} key={index+1} />
            })}
          </div>
        </div>
      </div>
      <div className="bottom">
            <div className="top">
              <img src={video} alt="video" />
            </div>
            <div className="youtube">
              <img src={youtube} alt="youtube" />
              <button>2mins video</button>
            </div>
        </div>
    </div>
  )
}

export default About