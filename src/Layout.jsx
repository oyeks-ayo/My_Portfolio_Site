import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Assuming you have a global CSS file

const Layout = () => {
    // This is a placeholder for the Layout component.
  return (
    <div>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className='mt-4'>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Container>
    </div>
  )
}

export default Layout