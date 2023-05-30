import React, { useState } from 'react'
import './Style.css'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
console.log(isMenuOpen)
  const handleMobileMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
   
        <nav className='pj-navbar'>
          
    <h3 className='logo'>
    <i className="fa-brands fa-codepen fa-2xl"></i>
      <span> Nakul.dev</span>
      </h3>
    <ul className='pj-list'>
      <li>
        <ul className='pj-list1'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#contact">Contact</a></li>
        </ul>
        </li>

        <button id='scroll' onClick={handleMobileMenuClick}>
   
          <i  className="fa-solid fa-bars-staggered mobile-menu" >
    
            </i>
            </button>
   
    </ul>
    
    
    
  </nav>

  
  </div>
  )
}

export default Navbar