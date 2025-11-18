import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import Awrapper from "./Awrapper"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about_us.jpg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='Adhyaya' title='About US' />
            <div className='text'>
              <p>At Adhyaya, we believe in a student-centric approach, tailoring our services to your individual academic needs and ambitions. Our team boasts extensive experience in international education, admission processes, and the ever-evolving educational landscape. We stay updated on the latest trends for international students and best practices to ensure up-to-date and effective guidance. Our commitment to you extends beyond the application process to ensure a smooth transition to your new academic journey. We believe in the power of lifelong learning and are dedicated to helping you discover new passions and skills.</p>
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
