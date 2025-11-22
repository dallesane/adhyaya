import React, { useState } from "react"
import "./services.css"
import Back from "../common/back/Back"
import "../home/hero/Hero.css"
import { useNavigate } from "react-router-dom"

const PreparationClasses = () => {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "" })
  const [submitting, setSubmitting] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) return
    setSubmitting(true)
    const subject = encodeURIComponent("IELTS register query")
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nThis is an IELTS register query submitted from the website.`
    )
    const mailto = `mailto:adhyaya.admissions@gmail.com?subject=${subject}&body=${body}`
    window.open(mailto, "_blank")
    setTimeout(() => {
      setSubmitting(false)
      setShowForm(false)
      setShowThanks(true)
    }, 400)
  }

  return (
    <>
      <Back title='Preparation Classes' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>IELTS, PB & CB / PTE / SAT</h2>
            <p>
              Acing the IELTS or PTE is essential whether you're aiming to study abroad, pursue professional opportunities, or migrate to an English-speaking country. Adhyaya is dedicated to empowering you with the skills and confidence to succeed in these high-stakes tests. Our students have a proven track record of achieving desired scores. Our classes are led by experts who provide personalized feedback and targeted practice exercises to make you comfortable and prepared for the test-day.
            </p>

            <div className='action-buttons'>
              <button className='btn-primary' onClick={() => navigate('/contact')}>Contact Us</button>
              <button className='btn-secondary' onClick={() => setShowForm(true)}>Schedule IELTS/PTE</button>
              <div className='notice'>Free Mock Test</div>
            </div>

            <div className='highlights'>
              <div className='highlight-item'>
                <h3>Free Mock Tests</h3>
                <p>Get a taste of the IELTS and PTE formats with our free sample tests.</p>
              </div>
              <div className='highlight-item'>
                <h3>2-day Free Trial Class</h3>
                <p>Available for all interested students.</p>
              </div>
            </div>

            <div className='services-divider'></div>

            <div className='english-classes-section'>
              <h2>English Classes</h2>
              <p>
                Elevate your English with our extensive English classes designed to suit your needs and learning style. Whether you are seeking to boost your confidence, career prospects, or enhancing academic experience, our classes are catered for individuals like you. Our team of highly qualified teachers prioritize practical communication skills, making sure the learning process is engaging, effective, and useful in real-life situations. Adhyaya is committed to helping you unlock your potential with our cutting-edge resources and up-to-date curriculum. Our classrooms are dynamic and interactive, fostering collaboration and peer-to-peer learning.
              </p>
              <p>
                Contact us for a free consultation to find the perfect class for you today!
              </p>

              <div className='action-buttons'>
                <button className='btn-primary' onClick={() => navigate('/contact')}>Contact Us</button>
                <div className='notice'>2-day Free Trial Class</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <div className='modal-overlay' onClick={() => !submitting && setShowForm(false)}>
          <div className='modal-card' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setShowForm(false)} aria-label='Close'>×</button>
            <h3 className='modal-title'>IELTS Registration</h3>
            <p className='modal-sub'>Fill your details and our team will assist your registration.</p>
            <form className='modal-form' onSubmit={onSubmit}>
              <div className='field'>
                <label htmlFor='name'>Full name</label>
                <input id='name' name='name' value={form.name} onChange={onChange} placeholder='Enter your full name' required />
              </div>
              <div className='field'>
                <label htmlFor='phone'>Phone</label>
                <input id='phone' name='phone' value={form.phone} onChange={onChange} placeholder='98XXXXXXXX' required />
              </div>
              <div className='field'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' value={form.email} onChange={onChange} placeholder='you@example.com' required />
              </div>
              <button type='submit' className='submit-btn' disabled={submitting}>
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showThanks && (
        <div className='toast-overlay' onClick={() => setShowThanks(false)}>
          <div className='toast-card'>
            <div className='toast-icon'>✔</div>
            <div className='toast-text'>Adhyaya team will reach out to you</div>
            <button className='toast-close' onClick={() => setShowThanks(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default PreparationClasses
