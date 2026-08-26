import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero" id="about">
      <div className="hero-img-container">
        {/* Make sure to add your image to the public folder */}
        <img src="src\assets\images\profile-pic.png" alt="Profile" className="hero-img" />
      </div>
      
      <h1 className="hero-name">Manishi Weerasekara</h1>
      <p className="hero-description">
        Full Stack Developer focused on creating modern, efficient software solutions.
      </p>
      
      <div className="hero-actions">
        <button className="btn-primary">View Projects</button>
        <button className="btn-outline">Talk to me</button>
      </div>
    </div>
  )
}

export default Hero