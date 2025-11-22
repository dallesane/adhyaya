import React, { useState } from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  const [selected, setSelected] = useState(null)
  const googleReviews = [
    {
      id: 1,
      name: "Prenum Rai",
      desc:
        "I had a great experience with Adhyaya Educational services while preparing for my IELTS exam. Their mock tests were incredibly helpful in familiarizing me with the exam format and improving my time management skills. The feedback I received was detailed and constructive, allowing me to work on my weak areas effectively",
      cover: "/images/main_logo.jpg",
    },
    {
      id: 2,
      name: "Asmeeta Aarushee",
      desc:
        "Best consultancy. Very helpful and knowledgeable staff, clear communication, effective guidance throughout the application process, and successful visa or admission outcomes. If you want to study abroad you can freely visit here. Feel proud to be a part of Adhyaya. Thank youuuu whole team",
      cover: "/images/main_logo.jpg",
    },
    {
      id: 3,
      name: "Aashish Khatri",
      desc:
        "My experience with Adhaya Educational Services for IELTS preparation was outstanding. The instructors were knowledgeable and offered effective strategies for each test section. The resources and practice materials were comprehensive, and the personalized feedback was invaluable.Thanks to their thorough preparation and support, I felt confident and well-prepared on test day. Highly recommended!",
      cover: "/images/main_logo.jpg",
    },
    {
      id: 4,
      name: "Kakashi Hatake",
      desc:
        "IELTS classes at Adhyaya Educational Services truly helped me achieve a great score, thanks to the unlimited mock tests and personalized support. The friendly environment, experienced instructors, and dedicated team made the learning experience exceptional. It's one of the best consultancy for study abroad guidance, including step-by-step assistance with the visa process. Highly recommended!",
      cover: "/images/main_logo.jpg",
    },
    {
      id: 5,
      name: "Dikshya Shrestha",
      desc:
        "I wish I could give more stars. Talking about the services,Good at handling rare and critical condition cases and processing.I had great experience with their service as whole.Thank you for everything. And of course I would like to highly recommend to everyone to consult with Adhyaya Educational Services for abroad Study, Documentation process,IELTS class and Mock test and Guitar class as well.",
      cover: "/images/main_logo.jpg",
    },
    {
      id: 6,
      name: "Kiran Khadgi",
      desc:
        "Members of Adhyaya Education Service are very helpful. They assisted me with visa processing from the beginning and explained every detail. I visited other consultancies as well, but I was convinced by how openly the members of Adhyaya discussed the entire process and the required documents. If anyone is planning for higher education and looking for the best consultant, I highly recommend visiting Adhyaya Education Service.",
      cover: "/images/main_logo.jpg",
    },
    {
      id: 7,
      name: "Abrisha Regmi",
      desc:
        "One of the best consultancy you can ever rely on! Truly an expert guidance. I thoroughly enjoyed the time preparing for my IELTS test.",
      cover: "/images/main_logo.jpg",
    },
  ]

  // Replace existing testimonials with provided Google reviews only
  const items = googleReviews

  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Success Stories' />

          {/* Marquee row of testimonial cards */}
          <div className='testi-marquee'>
            <div className='testi-track'>
              {[...items, ...items].map((val, idx) => (
                <div key={`${val.name}-${idx}`} className='tcard shadow'>
                  <div className='tcard-top'>
                    <div className='timg'>
                      <img src={val.cover || "/images/main_logo.jpg"} alt='' />
                    </div>
                    <div className='tmeta'>
                      <h3 className='tname'>{val.name}</h3>
                      <div className='tstars'>
                        <img src='/images/fivestar.png' alt='5 star rating' className='tstars-img' />
                      </div>
                    </div>
                  </div>
                  <p className='ttext clamp-3'>{val.desc}</p>
                  <button className='tmore' onClick={() => setSelected(val)}>Show more</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selected && (
          <div className='review-modal-overlay' onClick={() => setSelected(null)}>
            <div className='review-modal' onClick={(e) => e.stopPropagation()}>
              <button className='review-close' onClick={() => setSelected(null)} aria-label='Close'>×</button>
              <div className='review-head'>
                <h3 className='review-name'>{selected.name}</h3>
                <img src='/images/fivestar.png' alt='5 star rating' className='tstars-img' />
              </div>
              <div className='review-body'>
                {selected.desc}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Testimonal
