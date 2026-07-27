import React from 'react'
import './Hero.css'
import profile_img from '../../assets/face.svg'
import resume from '../../assets/MBIT_CE_PatelVrushaPrakashkumar.pdf'  

const Hero = () => {

  const handleScroll = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  };

  const openResume = () => {
    window.open(resume, "_blank");  
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />

        <h1>
          <span>I'm Vrusha Patel,</span> Full-Stack Developer and Computer Engineering student.
        </h1>

        <p>
         I am a skilled Frontend Developer from India with 2 years of experience working with HTML, CSS, JavaScript, React, and modern frontend technologies to build high-performance websites. In addition, I have recently developed several full-stack MERN Stack projects, gaining practical experience with MongoDB, Express.js, React, and Node.js. My experience includes building responsive web applications, developing RESTful APIs, integrating databases, and delivering complete end-to-end solutions.
        </p>

        <div className="hero-action">
            <div 
              className="hero-connect" 
              onClick={handleScroll}
              style={{ cursor: "pointer" }}
            >
              Connect With Me
            </div>
            <div 
              className="hero-resume"
              onClick={openResume}
              style={{ cursor: "pointer" }}
            >
              My Resume
            </div>

        </div>
    </div>
  )
}

export default Hero