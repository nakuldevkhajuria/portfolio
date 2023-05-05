import React from 'react'
import './Style.css'

const Navbar = () => {
  return (
    <div className="navbar">
   
        <nav className='pj-navbar'>
          
    <h3 className='logo'>
    <i className="fa-brands fa-codepen fa-2xl"></i>
      <span> Nakul.dev</span>
      </h3>
    <ul className='pj-list'>
      <li><ul className='pj-list1'>
      <li>Home</li>
      <li>Store</li>
      <li>Contact</li>
      <li>About</li>
        </ul></li>
   
      <li><i className="fa-solid fa-bars-staggered mobile-menu"></i></li>
    </ul>
    
    
    
  </nav>

  
  </div>
  )
}

export default Navbar