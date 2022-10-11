import React, {useState} from 'react'
import next from "../../images/nextArrow.svg"
import back from "../../images/backArrow.svg"
import data from "./testimonies"
import "./testimonial.css"

function Testimonial() {
  const [testimony, setTestimony] = useState(0)
  const message = data[testimony]

  const checkNumber = (num)=>{
    if(num > data.length-1){
      return 0
    } else if(num < 0){
      return data.length -1
    } else {
      return num
    }
  }

  const prevTestimony = ()=>{
    setTestimony(checkNumber(testimony-1))
  }
  const nextTestimony = ()=>{
    setTestimony(checkNumber(testimony+1))
  }
  return (
    <div className='testimonial'>
        <div className="testifier">
          <img src={message.image} alt={message.name} />
        </div>
        <div className="testimony">
          <div className="previous" onClick={prevTestimony}>
            <img src={back} alt="arrow"/>
          </div>
          <div className="message">
            <p>{message.testimony}</p>
            <p>--{message.name}</p>
          </div>
          <div className="next" onClick={nextTestimony}>
            <img src={next} alt="arrow"/>
          </div>
        </div>
    </div>
  )
}

export default Testimonial