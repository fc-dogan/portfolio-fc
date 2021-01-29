import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header () {
  return (
    
      <Navbar collapseOnSelect
      fixed='top'
      expand='lg'
      variant='light'
      style={{backgroundColor:'lightgrey'}}
      >
        <Container>
          <Navbar.Brand>FCD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About me</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="">LinkedIn</Nav.Link>
            <Nav.Link href="">GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
  );
}

export default Header;
