import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './assets/Navb.css';

const Navb = () => {
  return (
    <Container fluid className='navb-container'>
      <Navbar.Brand href="#home" className='navb-brand'>AYODELE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navb-nav">
          <Nav.Link href="#about" className='navb-link'>About</Nav.Link>
          <Nav.Link href="#projects" className='navb-link'>Projects</Nav.Link>
          <Nav.Link href="#contact" className='navb-link'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  )
}

export default Navb