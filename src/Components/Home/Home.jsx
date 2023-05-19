import React, { useEffect } from 'react'
import './Style.css'
const Home = () => {

useEffect(()=>{

   const list =  document.getElementById('myList li')
//    list.innerText= 'helo'
    console.log(list)
},[])

    return (
        <div className='section'>
            <div className='container'>
                <div className='content'>
                    <div className='hero-text'>
                        <h1>Front End React Developer
                        <i className="fa-solid fa-display"></i>
                        </h1>
                        <p>
                            Hi, i'm Nakul dev Khajuria. A passionate MERN Stack developer based in Delhi, India.
                        </p>
                        <div className='social-media'>
                            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nakuldevkhajuria/"><i className="fa-brands fa-linkedin"></i></a>
                            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/nakuldevkhajuria"><i className="fa-brands fa-github"></i></a>

                        </div>
                    </div>
                    <div className='hero-main'>

                    </div>
                </div>
                <div className='skillsContainer'>
                <div className='skills'>
                    <p>Tech Stack</p>
                   <ul id='myList'>
                    <li ></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  
                   </ul>
                </div></div>
            </div>
        </div>
  
    )
}

export default Home