import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import StudyAbroad from "./components/services/StudyAbroad"
import PreparationClasses from "./components/services/PreparationClasses"
import RecreationalClasses from "./components/services/RecreationalClasses"
import VocationalTraining from "./components/services/VocationalTraining"
import InternshipOpportunities from "./components/services/InternshipOpportunities"
import IeltsRegistration from "./components/services/IeltsRegistration"
import InterviewPreparation from "./components/services/InterviewPreparation"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/courses' element={<CourseHome/>}/>
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/pricing' element={<Pricing/>} />
          <Route exact path='/journal' element={<Blog/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/services/study-abroad' element={<StudyAbroad/>} />
          <Route exact path='/services/preparation-classes' element={<PreparationClasses/>} />
          <Route exact path='/services/recreational-classes' element={<RecreationalClasses/>} />
          <Route exact path='/services/vocational-training' element={<VocationalTraining/>} />
          <Route exact path='/services/internship-opportunities' element={<InternshipOpportunities/>} />
          <Route exact path='/services/ielts-registration-mock-tests' element={<IeltsRegistration/>} />
          <Route exact path='/services/interview-preparation' element={<InterviewPreparation/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
