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
      <li><ul className={`pj-list1 ${isMenuOpen ? 'open' : ''}`}>
      <li>Home</li>
      <li>About</li>
      <li>Project</li>
      <li>Contact</li>
        </ul></li>
        <li id='scroll'><i  className="fa-solid fa-bars-staggered mobile-menu" onClick={handleMobileMenuClick}></i></li>
   
    </ul>
    
    
    
  </nav>

  
  </div>
  )
}

export default Navbar