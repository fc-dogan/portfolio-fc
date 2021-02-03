
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub , FaEnvelope } from 'react-icons/fa';


function SideBar() {
  return (
    <div className='sidebar'>
      
      <div id='profile'>
         <p>profile</p>
      </div>
      <a href="/"  > home</a>
      <a href="#projects" >Projects</a>
      <a href="#education" >Education</a>
      <a href="https://www.linkedin.com/in/fatma-c-dogan/" > <FaLinkedin size='1.5rem' /></a>
      <a href="https://github.com/fc-dogan" ><FaGithub size='1.5rem' /></a>
      <a href="mailto:fceyda@gmail.com" ><FaEnvelope size='1.5rem' /></a>

    </div>
  )
}

export default SideBar
