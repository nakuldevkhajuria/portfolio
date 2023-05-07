import React from 'react'
import './Style.css'
const Home = () => {
    return (
        <div className='section'>
            <div className='container'>
                <div className='content'>
                    <div className='hero-text'>
                        <h1>Front End React Developer</h1>
                        <p>
                            Hi, i'm Nakul dev Khajuria. A passionate Front-end React developer based in Delhi, India.
                        </p>
                        <div className='social-media'>
                            <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/stefan-topalovic-dev/"><i class="fa-brands fa-linkedin"></i></a>
                            <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/stefvndev"><i class="fa-brands fa-github"></i></a>

                        </div>
                    </div>
                    <div className='hero-main'>

                    </div>
                </div>
                <div className='skills'></div>
            </div>
        </div>
    )
}

export default Home