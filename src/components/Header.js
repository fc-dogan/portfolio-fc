import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub , FaEnvelope } from 'react-icons/fa';

function Header () {
 
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
    <Navbar.Brand href="#home">FCD</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        {/* <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      
      </Nav>
      <Nav>
      <Nav.Link href="https://www.linkedin.com/in/fatma-c-dogan/"> <FaLinkedin size='2rem'/></Nav.Link>
      <Nav.Link href="https://github.com/fc-dogan"><FaGithub size='2rem' /></Nav.Link>
      <Nav.Link href="mailto:fceyda@gmail.com"><FaEnvelope size='2rem' /></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    
      // <Navbar collapseOnSelect
      // // fixed='top'
      // expand='lg'
      // variant='light'
      // // style={{backgroundColor:'lightgrey'}}
      // >
      //   <Container>
      //     <Navbar.Brand>FCD</Navbar.Brand>
      //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      //     <Navbar.Collapse id="responsive-navbar-nav">
      //       <Nav  pullRight>
      //       <Nav.Link href="/">Home</Nav.Link>
      //       {/* <Nav.Link href="#aboutme">About me</Nav.Link> */}
      //       <Nav.Link href="#projects">Projects</Nav.Link>
      //       <Nav.Link href="https://www.linkedin.com/in/fatma-c-dogan/"> <FaLinkedin/></Nav.Link>
      //       <Nav.Link href="https://github.com/fc-dogan"><FaGithub/></Nav.Link>
      //       </Nav>
      //     </Navbar.Collapse>
      //   </Container>
      //   <Container>
          
      //   </Container>
      // </Navbar>
      
  );
}

export default Header;
