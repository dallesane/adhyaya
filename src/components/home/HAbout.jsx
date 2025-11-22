                                                                                                                                                                                                                                                                                            import React, { useState } from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"

// Helper image component that tries multiple filename variants and extensions
const DestinationImg = ({ label, className }) => {
  const variants = (() => {
    const bases = [
      label,
      encodeURIComponent(label),
      label.replace(/\s+/g, "-"),
      label.replace(/\s+/g, "_"),
      label.toLowerCase().replace(/\s+/g, "-"),
      label.toLowerCase().replace(/\s+/g, "_")
    ]
    const exts = ["png", "jpg", "jpeg", "webp"]
    const files = []
    bases.forEach((b) => exts.forEach((e) => files.push(`/images/destinations/${b}.${e}`)))
    return Array.from(new Set(files))
  })()
  const [idx, setIdx] = useState(0)
  const src = variants[idx]
  return (
    <img
      className={className}
      src={src}
      alt={label}
      onError={() => idx < variants.length - 1 && setIdx(idx + 1)}
    />
  )
}

const destinations = [
  {
    title: "United States: The Land of Innovation and Diversity",
    img: "./images/destinations/usa.jpg",
    desc:
      "The United States is home to some of the world’s most prestigious universities and offers an unmatched diversity of programs and cultural experiences. Adhyaya Educational Services helps you navigate among numerous study options, from Ivy League schools to state universities known for their cutting-edge research and innovation. We provide comprehensive support on scholarship opportunities, application processes, interview preparations, visa requirements, and pre-departure preparations, ensuring you are well-prepared for your academic adventure.",
  },
  {
    title: "Australia: Excellence in Education and Quality of Life",
    img: "./images/destinations/australia.jpg",
    desc:
      "Australia is renowned for its globally recognized degree, excellent quality of life and popular study destination for international students. We assist you in selecting from a wide range of universities and guide you through course selection, application assistance, visa processing, and accommodation arrangements, helping you make informed choices along the way.",
  },
  {
    title: "Dubai: A Hub of Modern Education and Innovation",
    img: "./images/destinations/dubai.jpg",
    desc:
      "Equipped with cutting-edge facilities, Dubai offers a unique blend of high-quality education, cultural diversity and modern innovation. Dubai is also home to top-tier international campuses and universities that provides an ideal environment for international students to achieve their academic goals. Our consultancy guides you through choosing the right institution, assistance with application procedures, and cultural acclimatization.",
  },
  {
    title: "India: A Rich Educational Heritage and Diverse Opportunities",
    img: "./images/destinations/india.jpg",
    desc:
      "India is known for its strong academic standards and affordable education. International students gain an excellent opportunity to be a part of globally renowned institutions. Adhyaya Educational Services helps you explore top universities and institutions offering a wide array of programs and help with your academic pursuit.",
  },
  {
    title: "Canada: World-Class Education and Multicultural Experience",
    img: "./images/destinations/canada.jpg",
    desc:
      "Canada is one of the most preferred destinations for international students due to its high academic standards, affordable tuition compared to other Western countries, and welcoming environment. With globally recognized degrees, research-oriented programs, and excellent post-study work opportunities, Canada offers a perfect balance of education and lifestyle. We guide you through course and university selection, scholarship opportunities, visa processing, and settlement assistance.",
  },
  {
    title: "United Kingdom: Tradition, Prestige, and Global Recognition",
    img: "./images/destinations/uk.jpg",
    desc:
      "The United Kingdom is home to some of the world’s oldest and most prestigious universities, offering internationally recognized qualifications and a strong emphasis on research and career-focused education. Studying in the UK gives students access to a global network of opportunities. Adhyaya Educational Services assists you in finding the right course, managing your application process, preparing for interviews, and navigating visa requirements.",
  },
  {
    title: "France: Academic Excellence and Cultural Enrichment",
    img: "./images/destinations/france.jpg",
    desc:
      "France is widely known for its excellence in education, art, fashion, science, and technology. With affordable tuition fees and numerous scholarships for international students, France provides a high-quality education combined with a rich cultural experience. We support you in selecting the right institution, preparing applications, language requirements, and settling into the French lifestyle.",
  },
  {
    title: "Cyprus: Affordable Quality Education in Europe",
    img: "./images/destinations/cyprus.jpg",
    desc:
      "Cyprus has emerged as a popular study destination due to its affordable tuition, English-taught programs, and strong links with European universities. Known for its safe environment and welcoming culture, it provides an excellent pathway to international education and career opportunities. Adhyaya Educational Services helps you explore universities, manage applications, and adapt smoothly to student life in Cyprus.",
  },
  {
    title: "Other European Countries: Expanding Horizons for Global Students",
    img: "./images/destinations/europe.jpg",
    desc:
      "Beyond the well-known destinations, several European countries such as Germany, Netherlands, Italy, Spain, and others offer high-quality education, affordable tuition, and multicultural experiences. These countries provide unique academic opportunities in diverse fields of study while ensuring a world-class student lifestyle. We assist you in navigating university options, scholarships, application processes, and cultural integration across Europe.",
  },
]

// Map long titles to image labels that match provided filenames
const imageLabelFromTitle = (title) => {
  const head = title.split(":")[0].trim()
  const map = {
    "United States": "USA",
    "United Kingdom": "UK",
    "Other European Countries": "European Union",
  }
  return map[head] || head
}

const HAbout = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='Destination' title='Discover top colleges and universities from around the world – make your choice!' />

          <div className='coursesCard'>
            <div className='grid2'>
              {destinations.map((val, idx) => (
                <div key={idx} className='items destination-card'>
                  <div className='text destination-text'>
                    <h3 className='destination-title'>{val.title}</h3>
                  </div>
                  <div className='destination-img-wrap'>
                    <DestinationImg className='destination-img' label={imageLabelFromTitle(val.title)} />
                  </div>
                  <div className='text destination-text'>
                    <p className='destination-excerpt'>{val.desc.substring(0, 200)}...</p>
                    <button className='outline-btn read-more' onClick={() => setSelected(val)}>Read more</button>
                  </div>
                </div>
              ))}
            </div>
            {selected && (
              <div className='destination-modal-overlay' onClick={() => setSelected(null)}>
                <div className='destination-modal' onClick={(e) => e.stopPropagation()}>
                  <h3 className='destination-modal-title'>{selected.title}</h3>
                  <p className='destination-modal-body'>{selected.desc}</p>
                  <button className='outline-btn' onClick={() => setSelected(null)}>Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
