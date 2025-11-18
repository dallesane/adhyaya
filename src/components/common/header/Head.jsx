import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
          <div className='left row'>
            <img src='./images/main_logo.png' alt='' />
          </div>
            {/* <h1>Adhyaya</h1>
            <span>Your steps to abroad learning</span> */}
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            {/* <i className='fab fa-twitter icon'></i> */}
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
