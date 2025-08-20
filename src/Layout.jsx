import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Navb from './Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // Assuming you have a global CSS file

const Layout = () => {
    // This is a placeholder for the Layout component.
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
        <Navb />
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
      <Navbar bg="dark" variant="dark" expand="lg" className='mb-4'>
        <Navb />
      </Navbar>
    </div>
  )
}

export default Layout