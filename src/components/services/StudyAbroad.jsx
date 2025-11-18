import React from "react"
import "./services.css"
import Back from "../common/back/Back"

const StudyAbroad = () => {
  return (
    <>
      <Back title='Study Abroad' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Study Abroad Services</h2>
            <p>
              We offer a wide range of services tailored to meet your individual needs:
            </p>

            <div className='study-abroad-services'>
              <div className='service-item'>
                <h3>Counseling</h3>
                <p>
                  Our expert education counselors provide one-to-one sessions to help you understand your academic goal. We assist you in finding right course that aligns with your academic background, interests, and career aspirations.
                </p>
              </div>

              <div className='service-item'>
                <h3>University Selection</h3>
                <p>
                  We offer a curated list of colleges and universities to suit your academic profile and preferences. Whether you're looking to study in top-ranked universities or scholarship opportunities, we have options for everyone.
                </p>
              </div>

              <div className='service-item'>
                <h3>Application Assistance</h3>
                <p>
                  We help you navigate through every step of the application process, ensuring that your documents are meticulously prepared and submitted on time. We assist with application forms, personal statements, letters of recommendation, and more.
                </p>
              </div>

              <div className='service-item'>
                <h3>Visa Guidance</h3>
                <p>
                  Navigating visa requirements can be daunting, but our experienced visa consultants provide you with detailed information and support to ensure a smooth visa application process. We help you understand the requirements and prepare all necessary documentation.
                </p>
              </div>

              <div className='service-item'>
                <h3>Pre-Departure Orientation</h3>
                <p>
                  With our pre-departure orientation, we provide you with information to prepare you for life abroad. From traveling tips, to possible expenses, we ensure you are ready for your new adventure.
                </p>
              </div>

              <div className='service-item'>
                <h3>Accommodation Assistance</h3>
                <p>
                  Finding a place to live in a new country can be challenging. We assist you in finding safe and affordable accommodation options near your chosen university, ensuring you have a comfortable stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StudyAbroad
