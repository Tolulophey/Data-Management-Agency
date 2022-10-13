import React, {useState} from 'react'
import './pricing.css'
import star from "../../images/star.svg"
import * as BsIcons from "react-icons/bs"
import feature from '../../images/featuresimg.svg'
import line from '../../images/line.svg'
import line2 from '../../images/line2.svg'

function Pricing() {
  const [quarterly, setQuarterly] = useState(false)
  const changeQuarterly = ()=>{
    setQuarterly(!quarterly)
  }
  const features = ["Take notes and collaborate", "Take notes and collaborate", "Take notes and collaborate", "Take notes and collaborate"]
  const basicPlan = ["Document Search", "Sector News", "Share Search Results"]
  const premiumPlan = ["Everything in basic plan", "Priority Support", "Early access to New features" ]
  const quarterPrice = <>
                        <p className='plan'>29$</p>
                        <p>Quarterly</p>
                      </>
  const annualPrice = <>
                        <p className='plan'>320$</p>
                        <p>Annually</p>
                      </>
  return (
    <div className='pricing'>
        <div className="features-container">
          <h2>Upcoming Features</h2>
          <div className="features">
            {
              features.map((item, index)=>{
                return <div className='feature' key={index+1}>
                        <img src={star} alt="star" />
                        <p>{item}</p>
                      </div>
              })
            }
          </div>
          <div className="image">
            <img src={feature} alt="people" />
          </div>
        </div>
        <div className="middle">
          <div className="top">
            <p className='first'>Enjoying Our Product ?</p>
            <p className='second'>Help us in meeting server and Database Carts</p>
            <div className='price-switch'>
              <p>Quaterly</p>
              <div className={quarterly ? "toggle active" : "toggle"}>
                <div className="toggle-on" onClick={changeQuarterly}>
                  <BsIcons.BsToggleOn className='on' />
                </div>
                <div className="toggle-off" onClick={changeQuarterly}>
                  <BsIcons.BsToggleOff className='on'/>
                </div>
              </div>
              <p>Annual</p>
            </div>
          </div>
          <div className="basic">
            <div className="top">
              <div className="left">
                <h2>Basic</h2>
                <img src={line} alt="line" />
              </div>
              <div className="right">
                <p className='plan'>Free</p>
                <p>with restriction</p>
              </div>
            </div>
            <div className="bottom">
              <p>Plan includes:</p>
              <div className="plans">
                {basicPlan.map((item, index)=>{
                  return <p className='plan' key={index+1}>{item}</p>
                })}
              </div>
              <div className='subscribe'>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="premium">
            <div className="top">
              <div className="left">
                <h2>Premium</h2>
                <img src={line2} alt="line" />
              </div>
              <div className="right">
                {quarterly ? quarterPrice : annualPrice}
              </div>
            </div>
            <div className="bottom">
              <p>Plan includes:</p>
              <div className="plans">
                {premiumPlan.map((item, index)=>{
                  return <p className='plan' key={index+1}>{item}</p>
                })}
              </div>
              <div className='subscribe'>
                <button>Get Started</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Pricing