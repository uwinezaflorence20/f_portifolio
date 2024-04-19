import { useState } from 'react'
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skill from './components/Skill'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Testimonies from './components/Testimonies';

function App() {
  return (
  <div>
     <Header/>
    <Router>
      <Routes>
       
         <Route path="/" element={<Home/>}/>
        <Route path="AboutMe" element={<AboutMe/>}/>
        <Route path="Skill" element={<Skill/>}/>
        <Route path="Projects" element={<Projects/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Testimonies" element={<Testimonies/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App
