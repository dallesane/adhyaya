import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  const path = location.pathname || ""
  let bgFile = "back.jpg" // default background

  if (path.includes("/services/preparation-classes")) {
    bgFile = "awrapper.webp"
  } else if (path.includes("/services/internship-opportunities")) {
    bgFile = "bg.webp"
  } else if (path.includes("/services/ielts-registration-mock-tests")) {
    bgFile = "back.webp"
  } else if (path.includes("/services/recreational-classes")) {
    bgFile = "about.webp"
  }

  const bgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${bgFile})`,
  }

  return (
    <>
      <section className='back' style={bgStyle}>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
