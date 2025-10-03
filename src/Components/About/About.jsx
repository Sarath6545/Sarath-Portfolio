import React from 'react'
import './About.css'
import profile_img from '../../assets/sarath_profile1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a Frontend Developer with expertise in web design, development, and digital marketing. Currently 
                    working at 3ONE Technologies, I specialize in creating responsive, user-friendly, and visually 
                    appealing websites.</p>
                <p>I am deeply passionate about crafting engaging and intuitive user experiences through frontend 
                    development. I love transforming ideas into visually appealing, responsive, and high-performing 
                    websites that enhance user interactions.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'60%'}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:'30%'}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:'40%'}}/></div>
                <div className="about-skill"><p>Python</p><hr style={{width:'50%'}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:'50%'}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Years of Expereince</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Projects Completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
