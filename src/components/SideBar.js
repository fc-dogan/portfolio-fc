
import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub , FaEnvelope } from 'react-icons/fa';
import profilePic from '../assets/fc1.jpg'
import './Sidebar.css';
import Footer from './Footer';

function SideBar() {
  return (
    <div className='sidebar'>
      <div id='profile'>
        {/* <img src={profilePic} alt="fatma dogan" style={{width:'120px', }}/> */}
         <p id='name'>Fatma C. Dogan</p>
      </div>
      <a href="/" > Home</a>
      <a href="#projects" >Projects</a>
      <a href="#education" >Education</a>
      <div className='social'>
        <a href="https://www.linkedin.com/in/fatma-c-dogan/" > <FaLinkedin  /></a>
        <a href="https://github.com/fc-dogan" ><FaGithub  /></a>
        <a href="mailto:fceyda@gmail.com" ><FaEnvelope  /></a>
      </div>
 

    </div>
  )
}

export default SideBar
