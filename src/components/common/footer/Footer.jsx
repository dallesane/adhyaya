import React from "react"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo-col'>
            <img className='footer-logo-tall' src='/images/main_logo.jpg' alt='Adhyaya logo' />
          </div>
          <div className='box brand-col'>
            <div className='brand-wrap'>
              <div className='brand-text'>
                <h1>Adhyaya</h1>
                <span> EDUCATIONAL SERVICES</span>
                <p>We are here to guide you for your future".</p>
              </div>
              <div className='footer-social'>
                <a href='https://www.facebook.com/share/1BCJKP36MF/' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                  <i className='fab fa-facebook-f icon'></i>
                </a>
                <a href='https://www.instagram.com/adhyayaeducational?utm_source=qr&igsh=MWMxamNkdGEyaHY5' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                  <i className='fab fa-instagram icon'></i>
                </a>
                <a href='https://youtube.com/@adhyayaeducationalservices5577?si=96PIezr4HVwgJzTH' target='_blank' rel='noopener noreferrer' aria-label='YouTube'>
                  <i className='fab fa-youtube icon'></i>
                </a>
                <a href='https://youtube.com/@adhyayaeducationalservices5577?si=96PIezr4HVwgJzTH' target='_blank' rel='noopener noreferrer' aria-label='TikTok'>
                  <i className='fab fa-tiktok icon'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li><Link to='/about' target='_blank' rel='noopener noreferrer'>About Us</Link></li>
              <li><Link to='/courses' target='_blank' rel='noopener noreferrer'>Courses</Link></li>
              <li><Link to='/contact' target='_blank' rel='noopener noreferrer'>Contact us</Link></li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Query?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Chabahil Chowk - 07, Kathmandu, Nepal
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                 014589536
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                 adhyaya.admissions@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2025 All rights reserved | <i className='fa fa-heart'></i> Adhyaya
        </p>
      </div>
    </>
  )
}

export default Footer
