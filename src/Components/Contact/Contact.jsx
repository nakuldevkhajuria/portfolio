import React from 'react'
import './Style.css'
const Contact = () => {
    return (
        <div className='contactSection'>
            <div className='contactContainer'>
                <div className='contactContent'>
                    <h4>CONTACT</h4>
                    <h2>Reach out to start a collaboration, share your thoughts, or simply say hello!</h2>
                    <div className="contact__icons"><div className="contact__icon-box"><span><i className="fa-solid fa-map-location-dot"></i></span><div className="contact__info"><h3 id='loca'>Location</h3><p>Gurugram, India</p></div></div><div className="contact__icon-box"><span><i className="fa-solid fa-envelope-open-text"></i></span>
                    <div className="contact__info"><h3>Mail</h3><a href="mailto:nakuldevkhajuria@gmail.com">nakuldevkhajuria@gmail.com</a></div></div></div>

                </div>
            </div>
        </div>
    )
}

export default Contact