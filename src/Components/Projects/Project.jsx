import React from 'react'
import './ProjectStyle.css'
const Project = () => {
  return (
    <div id='project' className='project'>
      <div className='containerProject'>
    <div className='heading'>
<h3>PORTFOLIO</h3>
<div>Projects are like fingerprints, each one leaving a distinctive mark on the journey of development.
<div className='journey'></div>
</div>
    </div>
  
    <div className='sectionProject'> 
    <h1>Coding Ninja's Clone From Scratch</h1>
       <section id='grid' className='blue'>
     
       
        <div id="iframeContainer">
      <iframe src="https://coding-ninja-frontend-pi.vercel.app/"></iframe>
    </div>    
   
</section>
<h1>Project 2</h1>
<section id='grid' className='orange'>
  <div>
   
    <p>Voluptas, a voluptates. Eum, qui unde ipsum illum earum assumenda voluptates animi distinctio voluptatum odit non provident dolore nam dolores blanditiis, impedit in, alias ad reprehenderit cumque commodi necessitatibus corporis.</p>
    </div>

</section>
<h1>Project 3</h1>
<section id='grid' className='pink'>

  <div>
    
    <p>Voluptas, a voluptates. Eum, qui unde ipsum illum earum assumenda voluptates animi distinctio voluptatum odit non provident dolore nam dolores blanditiis, impedit in, alias ad reprehenderit cumque commodi necessitatibus corporis.</p>
    </div>
</section></div>
</div>

</div>
  )
}

export default Project