import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const InternshipOpportunities = () => {
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
              <button className='btn-primary'>Apply Now</button>
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
    </>
  )
}

export default InternshipOpportunities
