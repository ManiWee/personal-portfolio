import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import './index.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}

export default App