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

// export const NavigationBar = () => (
//   <Styles>
//     <Navbar expand="lg">
//       <Navbar.Brand href="/">Tutorial</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//       <Form className="form-center">
//         <FormControl type="text" placeholder="Search" className="" />
//       </Form>
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
//           <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </Styles>
// )