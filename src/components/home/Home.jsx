import React, { useState } from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const DestinationImg = ({ label }) => {
  const variants = (() => {
    const base = [
      `${label}`,
      encodeURIComponent(label),
      label.replace(/\s+/g, "-"),
      label.replace(/\s+/g, "_"),
      label.toLowerCase().replace(/\s+/g, "-"),
      label.toLowerCase().replace(/\s+/g, "_")
    ]
    const exts = ["png", "jpg", "jpeg", "webp"]
    const files = []
    base.forEach((name) => exts.forEach((ext) => files.push(`/images/destinations/${name}.${ext}`)))
    return Array.from(new Set(files))
  })()
  const [idx, setIdx] = React.useState(0)
  const src = variants[idx]
  return (
    <img
      src={src}
      alt={label}
      onError={() => {
        if (idx < variants.length - 1) setIdx(idx + 1)
      }}
    />
  )
}

const Home = () => {
  const [showForm, setShowForm] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "" })
  const [submitting, setSubmitting] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) return
    setSubmitting(true)
    // Fallback email via mailto (opens user's email client)
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
      <Hero />
      <section className='ielts-banner'>
        <div className='container'>
          <div className='ielts-wrap'>
            <div className='ielts-badge'>Authorized</div>
            <h3 className='ielts-title'>Authorized IELTS registration center for IDP IELTS Nepal</h3>
            <button className='ielts-cta' onClick={() => setShowForm(true)}>
              Register now
            </button>
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

      <AboutCard />
      <HAbout />

      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home
