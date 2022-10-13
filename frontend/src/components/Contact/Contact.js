import React from 'react'
import './contact.css'
import data from '../Footer/data'

function Contact() {
  const socialMedia = data.socialMedias
  return (
    <div className='contact'>
      <div className="left">
        <div className="top">
          <h2>Have a Project in mind?</h2>
          <p>Reach out to us. We can make something awesome together.</p>
        </div>
        <div className="details">
          <div className="location">
            <p className="detail">Address</p>
            <p className="value">NIGERIA</p>
          </div>
          <div className="email">
            <p className="detail">Email</p>
            <a href="mailto:support@fixbyte.com"><p className="value">support@fixbyte.com</p></a>
          </div>
          <div className="number">
            <p className="detail">Phone</p>
            <a href="tel:+2348063673201"><p className="value">+234 806 367 3201</p></a>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Contact Us</h2>
        <form>
          <input type="text" name='name' placeholder='Name' />
              <input type="email" name="email" placeholder='Email Address'/>
              <textarea name="details" placeholder='DETAILS'></textarea>
              <input type="button" value="Send Message" />
        </form>
        <div className="social-media">
            {socialMedia.map((item, index)=>{
              return <a href={item.link} className="media" key={index+1}>
                          <img src={item.image} alt="icon" />
                      </a>
            })}
        </div>
      </div>
    </div>
  )
}

export default Contact