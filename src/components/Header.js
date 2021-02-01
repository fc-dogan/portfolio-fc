import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Header () {
  return (
    
      <Navbar collapseOnSelect
      // fixed='top'
      expand='lg'
      variant='light'
      // style={{backgroundColor:'lightgrey'}}
      >
        <Container>
          <Navbar.Brand>FCD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#aboutme">About me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/fatma-c-dogan/"> <FaLinkedin/></Nav.Link>
            <Nav.Link href="https://github.com/fc-dogan"><FaGithub/></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container>
          
        </Container>
      </Navbar>
      
  );
}

export default Header;
