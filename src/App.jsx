import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Nav/>
    <Home/>
    <Projects/>
    {/* <Skills/> */}
    <Services/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
