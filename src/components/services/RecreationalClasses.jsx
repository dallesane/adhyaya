import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const RecreationalClasses = () => {
  return (
    <>
      <Back title='Recreational Classes' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Music Classes</h2>
            <p>
              Nurture your creative side with our creative courses. We offer a wide range of music courses including guitar, drums, and vocal classes that help you enrich your interests. Our instructors are highly qualified with years of experience in their respective fields.
            </p>

            <div className='action-buttons'>
              <button className='btn-primary'>Join Today</button>
              <button className='btn-secondary'>Trial Class Available</button>
            </div>

            <div className='highlights'>
              <div className='highlight-item'>
                <h3>Guitar Classes</h3>
                <p>Learn from experienced instructors with personalized guidance.</p>
              </div>
              <div className='highlight-item'>
                <h3>Drums & Vocal Classes</h3>
                <p>Explore your musical talents with our expert trainers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RecreationalClasses
