import React from 'react'
import { Card } from 'react-bootstrap'
import './assets/About.css'

const About = () => {
  return (
    <div>
      <Card className='about-card'>
        <Card.Body>
          <Card.Title className='about-title'>About Me</Card.Title>
          <Card.Text className='about-intro'>
            Hello, I'm <strong>Ayodele .D Oyekanmi</strong>, a Fullstack Python web developer at SeenITApp with expertise in JavaScript, Python, React.js, Flask, and Bootstrap. I specialize in building full-stack applications like product management systems and API-driven apps.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='experience-card'>
        <Card.Body>
          <Card.Title className='experience-title'>Junior Database Engineer</Card.Title>
          <Card.Subtitle className='experience-subtitle'>m365Connect (Internship) • July - November 2025</Card.Subtitle>
          <Card.Text className='experience-content'>
            <ul className='experience-list'>
              <li>Optimized PostgreSQL database for efficient querying</li>
              <li>Fetched and processed 100,000+ candidates via Manatal's API at 20 requests/min using Flask HTTP Requests</li>
              <li>Extended Manatal functionalities with custom LLM integration</li>
              <li>Developed user-friendly applications using Budibase (no-code platform)</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='skills-card'>
        <Card.Body>
          <Card.Title className='skills-title'>Technical Skills</Card.Title>
          
          <div className='skill-section'>
            <Card.Subtitle className='skill-category'>Frontend Development</Card.Subtitle>
            <ul className='skills-list'>
              <li><span className='skill-badge'>HTML5</span> Semantic markup, accessibility, SEO</li>
              <li><span className='skill-badge'>CSS3</span> Flexbox, Grid, responsive design</li>
              <li><span className='skill-badge'>JavaScript</span> ES6+, DOM manipulation, APIs</li>
              <li><span className='skill-badge'>React.js</span> Components, hooks, state management</li>
              <li><span className='skill-badge'>Bootstrap</span> Responsive design, components</li>
              <li><span className='skill-badge'>Git/GitHub</span> Version control, collaboration</li>
            </ul>
          </div>

          <div className='skill-section'>
            <Card.Subtitle className='skill-category'>Backend Development</Card.Subtitle>
            <ul className='skills-list'>
              <li><span className='skill-badge'>Python</span> Core syntax, OOP, data structures</li>
              <li><span className='skill-badge'>Flask</span> Routing, templates, RESTful APIs</li>
              <li><span className='skill-badge'>Express.js</span> Building RESTful APIs, middleware implementation, route handling</li>
              <li><span className='skill-badge'>Node.js</span> Backend development, event-driven architecture, package management</li>
              <li><span className='skill-badge'>SQL</span> Queries, joins, CRUD operations</li>
              <li><span className='skill-badge'>PostgreSQL</span> Database design, schema management</li>
              <li><span className='skill-badge'>MongoDB</span> NoSQL, flexible schemas</li>
              <li><span className='skill-badge'>API Dev</span> RESTful design, JSON, HTTP methods</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default About