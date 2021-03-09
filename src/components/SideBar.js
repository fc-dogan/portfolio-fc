import React from 'react'
import { FaLinkedin, FaGithub , FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

function SideBar() {
  return (
    <div className='sidebar'>
      <div id='profile'>
        <p id='name'>Fatma C. Dogan</p>
      </div>
      <div id="links">
        <a href="/" > Home</a>
        <a href="#projects" >Projects</a>
        <a href='#aboutMe' >About Me</a>
        <a href="#education" >Education</a>
      </div>
      <div className='social'>
        <a href="https://www.linkedin.com/in/fatma-c-dogan/" > <FaLinkedin  /></a>
        <a href="https://github.com/fc-dogan" ><FaGithub  /></a>
        <a href="mailto:fceyda@gmail.com" ><FaEnvelope  /></a>
      </div>
    </div>
  )
}

export default SideBar
