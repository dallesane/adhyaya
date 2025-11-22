import React, { useState } from "react"
import "./services.css"
import Back from "../common/back/Back"
import "../home/hero/Hero.css"

const IeltsRegistration = () => {
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
      <Back title='IELTS Registration & Mock Tests' />
      <section className='services-content'>
        <div className='container'>
          <div className='services-card'>
            <h2>Authorised IELTS Registration Centre (IDP IELTS Nepal)</h2>
            <p>
              Adhyaya Educational Services is an official registration centre for IELTS through IDP IELTS Nepal. We make it simple and reliable to book your IELTS test directly with us.
            </p>

            <div className='action-buttons'>
              <button className='btn-primary' onClick={() => setShowForm(true)}>Book IELTS Now</button>
              <div className='notice'>Take a Mock Test</div>
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

export default IeltsRegistration
