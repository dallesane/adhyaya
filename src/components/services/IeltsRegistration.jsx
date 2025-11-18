import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const IeltsRegistration = () => {
  return (
    <>
      <Back title='IELTS Registration & Mock Tests' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Authorised IELTS Registration Centre (IDP IELTS Nepal)</h2>
            <p>
              Adhyaya Educational Services is an official registration centre for IELTS through IDP IELTS Nepal. We make it simple and reliable to book your IELTS test directly with us.
            </p>

            <div className='action-buttons'>
              <button className='btn-primary'>Book IELTS Now</button>
              <button className='btn-secondary'>Take a Mock Test</button>
            </div>

            <div className='highlights'>
              <div className='highlight-item'>
                <h3>Book IELTS with Adhyaya</h3>
                <p>Hassle-free registration and guidance for your IELTS test.</p>
              </div>
              <div className='highlight-item'>
                <h3>Mock Tests Available</h3>
                <p>Practice all 4 modules (Reading, Writing, Listening, Speaking) before your real test.</p>
              </div>
              <div className='highlight-item'>
                <h3>Expert Guidance</h3>
                <p>Our team ensures you are fully prepared with tips, tricks, and feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default IeltsRegistration
