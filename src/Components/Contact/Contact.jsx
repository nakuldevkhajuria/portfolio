import React from 'react'
import './Style.css'
const Contact = () => {
    return (
        <div className='contactSection'>
            <div className='contactContainer'>
                <div className='contactContent'>
                    <h4>CONTACT</h4>
                    <h2>Reach out to start a collaboration, share your thoughts, or simply say hello!</h2>
                    <div class="contact__icons"><div class="contact__icon-box"><span><i class="fa-solid fa-map-location-dot"></i></span><div class="contact__info"><h3 id='loca'>Location</h3><p>Belgrade, Serbia</p></div></div><div class="contact__icon-box"><span><i class="fa-solid fa-envelope-open-text"></i></span>
                    <div class="contact__info"><h3>Mail</h3><a href="mailto:stefan.topallovic@gmail.com">stefan.topallovic@gmail.com</a></div></div></div>

                </div>
            </div>
        </div>
    )
}

export default Contact