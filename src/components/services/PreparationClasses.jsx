import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const PreparationClasses = () => {
  return (
    <>
      <Back title='Preparation Classes' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>IELTS, PB & CB / PTE / SAT</h2>
            <p>
              Acing the IELTS or PTE is essential whether you're aiming to study abroad, pursue professional opportunities, or migrate to an English-speaking country. Adhyaya is dedicated to empowering you with the skills and confidence to succeed in these high-stakes tests. Our students have a proven track record of achieving desired scores. Our classes are led by experts who provide personalized feedback and targeted practice exercises to make you comfortable and prepared for the test-day.
            </p>

            <div className='action-buttons'>
              <button className='btn-primary'>Contact Us</button>
              <button className='btn-secondary'>Schedule IELTS/PTE</button>
              <button className='btn-tertiary'>Free Mock Test</button>
            </div>

            <div className='highlights'>
              <div className='highlight-item'>
                <h3>Free Mock Tests</h3>
                <p>Get a taste of the IELTS and PTE formats with our free sample tests.</p>
              </div>
              <div className='highlight-item'>
                <h3>2-day Free Trial Class</h3>
                <p>Available for all interested students.</p>
              </div>
            </div>

            <div className='services-divider'></div>

            <div className='english-classes-section'>
              <h2>English Classes</h2>
              <p>
                Elevate your English with our extensive English classes designed to suit your needs and learning style. Whether you are seeking to boost your confidence, career prospects, or enhancing academic experience, our classes are catered for individuals like you. Our team of highly qualified teachers prioritize practical communication skills, making sure the learning process is engaging, effective, and useful in real-life situations. Adhyaya is committed to helping you unlock your potential with our cutting-edge resources and up-to-date curriculum. Our classrooms are dynamic and interactive, fostering collaboration and peer-to-peer learning.
              </p>
              <p>
                Contact us for a free consultation to find the perfect class for you today!
              </p>

              <div className='action-buttons'>
                <button className='btn-primary'>Contact Us</button>
                <button className='btn-tertiary'>2-day Free Trial Class</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PreparationClasses
