import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const InterviewPreparation = () => {
  return (
    <>
      <Back title='Interview Preparation Sessions' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Interview Preparation Sessions</h2>
            <p>
              Preparing for your visa interview is just as important as your academic readiness. Our specialized interview preparation sessions help you build confidence and communicate effectively.
            </p>

            <div className='interview-section'>
              <h3>We offer training for:</h3>
              <ul className='interview-list'>
                <li>Student Visa Interviews</li>
                <li>Visitor Visa Interviews</li>
                <li>Other Visa Categories (Work, Dependent, etc.)</li>
              </ul>
            </div>

            <div className='interview-section'>
              <h3>Our sessions include:</h3>
              <ul className='interview-list'>
                <li>Mock interviews with real-time feedback</li>
                <li>Guidance on answering tricky questions</li>
                <li>Tips on presenting yourself professionally and confidently</li>
              </ul>
            </div>

            <div className='action-buttons'>
              <button className='btn-primary'>Book an Interview Prep Session</button>
            </div>

            <div className='highlights'>
              <div className='highlight-item'>
                <h3>Mock Interviews</h3>
                <p>Practice with real-time feedback from experienced professionals.</p>
              </div>
              <div className='highlight-item'>
                <h3>Expert Guidance</h3>
                <p>Learn how to answer tricky questions with confidence.</p>
              </div>
              <div className='highlight-item'>
                <h3>Professional Presentation</h3>
                <p>Master the art of presenting yourself confidently and professionally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InterviewPreparation
