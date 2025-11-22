import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const getSubjectDefault = () => {
    const params = new URLSearchParams(window.location.search)
    return params.get('subject') || ''
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name') || ''
    const email = formData.get('email') || ''
    const phone = formData.get('phone') || ''
    const subject = formData.get('subject') || getSubjectDefault() || 'Website enquiry'
    const message = formData.get('message') || ''
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    const mailto = `mailto:adhyaya.admissions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Chabahil Chowk -07, Kathmandu</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> adhyaya.admissions@gmail.com </p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> 014589536 </p>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className='flexSB'>
                <input type='text' name='name' placeholder='Name' required />
                <input type='email' name='email' placeholder='Email' required />
              </div>
              <input type='tel' name='phone' placeholder='Phone' />
              <input type='text' name='subject' placeholder='Subject' defaultValue={getSubjectDefault()} />
              <textarea name='message' cols='30' rows='10' placeholder='Write your message here...'></textarea>
              <button type='submit' className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
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
              <a href='https://www.tiktok.com/@adhyayaeducational?_r=1&_t=ZS-91VQr60x0Yj' target='_blank' rel='noopener noreferrer' aria-label='TikTok'>
                <i className='fab fa-tiktok icon'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
