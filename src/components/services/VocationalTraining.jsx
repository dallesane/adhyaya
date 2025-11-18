import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const VocationalTraining = () => {
  return (
    <>
      <Back title='Vocational Training' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Vocational Training</h2>
            <div className='coming-soon'>
              <p>Courses coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VocationalTraining
