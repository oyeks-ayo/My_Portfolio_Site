import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Navb from './Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/Layout.css';

const Layout = () => {
  return (
    <div className='layout-wrapper'>
      <Navbar expand="lg" className='navbar-custom sticky-top'>
        <Navb />
      </Navbar>
      <main className='layout-main'>
        <Container className='layout-container'>
          <section id="about" className='section-spacing'>
            <About />
          </section>
          <section id="projects" className='section-spacing'>
            <Projects />
          </section>
          <section id="contact" className='section-spacing'>
            <Contact />
          </section>
        </Container>
      </main>
      <footer className='footer-custom'>
        <Container className='py-4'>
          <p className='text-center mb-0'>© 2025 Ayodele Oyekanmi. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  )
}

export default Layout