import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navb = () => {
  return (
    <Container>
            <Navbar.Brand href="#home">OYEKANMI AYODELE DANIEL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
    </Container>
  )
}

export default Navb