import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const servicesRef = useRef(null)

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesDropdown(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li 
              className="services-dropdown" 
              ref={servicesRef}
            >
              <span className="services-toggle" onClick={toggleServicesDropdown}>
                Services <span className="arrow-icon">{servicesDropdown ? '▲' : '▼'}</span>
              </span>
              {servicesDropdown && (
                <div className="dropdown-menu" onMouseLeave={() => setServicesDropdown(false)}>
                  <Link to='/services/study-abroad' onClick={() => setServicesDropdown(false)}>Study Abroad</Link>
                  <Link to='/services/preparation-classes' onClick={() => setServicesDropdown(false)}>Preparation Classes</Link>
                  <Link to='/services/recreational-classes' onClick={() => setServicesDropdown(false)}>Recreational Classes</Link>
                  <Link to='/services/vocational-training' onClick={() => setServicesDropdown(false)}>Vocational Training</Link>
                  <Link to='/services/internship-opportunities' onClick={() => setServicesDropdown(false)}>Internship Opportunities</Link>
                  <Link to='/services/ielts-registration-mock-tests' onClick={() => setServicesDropdown(false)}>IELTS Registration & Mock Tests</Link>
                  <Link to='/services/interview-preparation' onClick={() => setServicesDropdown(false)}>Interview Preparation Sessions</Link>
                </div>
              )}
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          {/* <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> */}
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
