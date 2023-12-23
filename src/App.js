import React from 'react'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Separator from './components/Separator'
import Cloud from './components/Cloud'

export default function App() {



  return (
    <div>
      <Navbar />
      <AboutMe />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
      <Separator />
      <Contact />
      <Footer />
    </div>
  )
}
