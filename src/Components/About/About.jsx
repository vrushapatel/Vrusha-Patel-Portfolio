import React from 'react'
import './About.css'
import theme_pattern from '../../assets/logo1.svg'
import profile_img from '../../assets/face.svg'

const About = () => {
    return (
        <div id='about' className='about'><br /><br /><br /><br />
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className='about-right'>
                    <div className='about-para'>
                        <p>
                              I am a Frontend Developer who enjoys building clean, responsive, and user-friendly websites. I like turning ideas into real designs and making sure everything looks good and works smoothly on different devices. Recently, I have also gained hands-on experience in MERN Stack development by building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                        </p><br />
                        <p>
                            I believe in writing simple and efficient code while focusing on good design and user experience. For me, development is not just about coding, but also about creating something that people find useful and easy to use.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Angular JS</p><hr style={{ width: "80%" }} /> </div>
                        <div className="about-skill"><p>MongoDB</p><hr style={{ width: "50%" }} /> </div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "70%" }} /> </div>
                        <div className="about-skill"><p>Node JS (Basic)</p><hr style={{ width: "30%" }} /> </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>

            </div>
             <br />
      <br />
      <br />

        </div>
    )
}
export default About