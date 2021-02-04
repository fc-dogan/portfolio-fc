
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub , FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/fc1.jpg'

function SideBar() {
  return (
    <div className='sidebar'>
      <div id='profile'>
        <img src={profilePic} alt="fatma dogan" style={{width:'120px', }}/>
         <h4>Fatma C. Dogan</h4>
      </div>
      <a href="/"  > home</a>
      <a href="#projects" >Projects</a>
      <a href="#education" >Education</a>
      <div className='social'>
        <a href="https://www.linkedin.com/in/fatma-c-dogan/" > <FaLinkedin size='1.2rem' /></a>
        <a href="https://github.com/fc-dogan" ><FaGithub size='1.2rem' /></a>
        <a href="mailto:fceyda@gmail.com" ><FaEnvelope size='1.2rem' /></a>
      </div>

    </div>
  )
}

export default SideBar
