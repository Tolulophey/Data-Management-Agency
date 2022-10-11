import React from 'react'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Testimonial from '../components/Testimonial/Testimonial'

function Home () {
  return (
    <>
        <Hero />
        <About />
        <Testimonial />
        <Footer />
    </>
  )
}

export default Home