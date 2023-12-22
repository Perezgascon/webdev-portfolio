import React from 'react'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import Separator from './components/Separator'

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
    </div>
  )
}
