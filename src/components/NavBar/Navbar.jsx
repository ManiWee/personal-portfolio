import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            Manishi<span className="dev-text">.DEV</span>
        </div>
        <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li> 
            <li><a href="#resume">Résumé</a></li> 
            <li><a href="#contact">Contact</a></li> 
        </ul>
    </div>
  )
}

export default Navbar