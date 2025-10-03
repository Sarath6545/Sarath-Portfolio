import React from 'react'
import './Hero.css'
import Profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Resume-Sarath.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profile} alt="" />
      <h1><span>I'm Sarath Kumar</span>, frontend <br />developer based in India</h1>
      <p>I'm a frontend webdeveloper Kakinada, AndhraPradesh with 1 year+ experience in 3one Technologies</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href={resume} download className='hero-resume'>My Resume</a>
      </div>
    </div>
  )
}

export default Hero
