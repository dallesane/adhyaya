import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ADHYAYA' title='Educate. Empower. Inspire.' />
            
            <p> Opening doors to global education, </p>
            <p> one student at a time</p>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
