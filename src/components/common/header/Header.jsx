import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
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
      <div className='header-logo-bar'>
        <div className='container'>
          <img className='header-logo-img' src='/images/main_logo.jpg' alt='Adhyaya logo' />
          <div className='social'>
            <a href='https://www.facebook.com/share/1BCJKP36MF/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
              <i className='fab fa-facebook-f icon'></i>
            </a>
            <a href='https://www.instagram.com/adhyayaeducational?utm_source=qr&igsh=MWMxamNkdGEyaHY5' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
              <i className='fab fa-instagram icon'></i>
            </a>
            <a href='https://youtube.com/@adhyayaeducationalservices5577?si=96PIezr4HVwgJzTH' target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
              <i className='fab fa-youtube icon'></i>
            </a>
            <a href='https://www.tiktok.com/@adhyayaeducational?_r=1&_t=ZS-91VQr60x0Yj' target='_blank' rel='noopener noreferrer' aria-label='TikTok'>
              <i className='fab fa-tiktok icon'></i>
            </a>
          </div>
        </div>
      </div>
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
