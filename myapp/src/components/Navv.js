import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" fixed="top" >
      <div className="container-fluid navbarr">
        <Navbar.Brand href="/" className='nav1'>MOHIT SUMAN</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            <Nav.Link href="#aboutme" className="text-dark">About Me</Nav.Link>
            <Nav.Link href="/project" className="text-dark">Project</Nav.Link>
            <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
