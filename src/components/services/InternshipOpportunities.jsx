import React, { useState } from "react"
import "./services.css"
import Back from "../common/back/Back"
import "../home/hero/Hero.css"

const InternshipOpportunities = () => {
  const [showNotice, setShowNotice] = useState(false)
  return (
    <>
      <Back title='Internship Opportunities' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Internship Opportunities</h2>
            <p>
              Adhyaya Educational Services offer internship opportunities curated to provide you with hands-on corporate experience, industry insights, and the opportunity to apply your textbook knowledge in real-world settings.
            </p>

            <div className='action-buttons'>
              <button
                className='btn-primary'
                onClick={() => setShowNotice(true)}
              >
                Apply Now
              </button>
            </div>

            <div className='highlights'>
              <div className='highlight-item'>
                <h3>Hands-on Experience</h3>
                <p>Work on real projects and gain practical corporate experience.</p>
              </div>
              <div className='highlight-item'>
                <h3>Industry Insights</h3>
                <p>Learn from professionals and understand industry best practices.</p>
              </div>
              <div className='highlight-item'>
                <h3>Real-world Application</h3>
                <p>Apply your textbook knowledge in practical, real-world settings.</p>
              </div>
              <div className='highlight-item'>
                <h3>Career Growth</h3>
                <p>Build your professional network and enhance your career prospects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showNotice && (
        <div className='modal-overlay' onClick={() => setShowNotice(false)}>
          <div className='modal-card' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setShowNotice(false)} aria-label='Close'>×</button>
            <h3 className='modal-title'>Application Information</h3>
            <p className='modal-sub'>Ready to take the next step in your career? Send your resume to adhyaya.jobs@gmail.com, and our team will be in touch with you soon!.</p>
            <button className='submit-btn' onClick={() => setShowNotice(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default InternshipOpportunities
