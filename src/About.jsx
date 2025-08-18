import React from 'react'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <Card className='mb-4'>
        <Card.Body>
            <Card.Title>About Me</Card.Title>
                <Card.Text>
                Hi, I'm Ayodele .D Oyekanmi, a python web developer with skills in React.js, Flask, and Bootstrap, gained through a recent bootcamp.
                I specialize in building full-stack applications like product management systems and API-driven apps. 
                Passionate about creating user-friendly, responsive web solutions.
                </Card.Text>
                <Card.Subtitle className='mb-2 text-muted'>
                    Skills:
                </Card.Subtitle>
                <Card.Text>
                    Frontend - 
                    <ul>
                        <li>HTML5 - Semantic markup, accessibility, SEO basics</li>
                        <li>CSS3 - Flexbox/Grid,responsive design</li>
                        <li>JavaScript - ES6+ features, DOM manipulation, APIs</li>
                        <li>React.js - Components, state management, hooks</li>
                        <li>Bootstrap - Responsive design, pre-built components</li>
                        <li>Git/GitHub - Version control, collaboration</li>
                    </ul>

                    Backend -
                    <ul>
                        <li>Python - Core syntax, data structures, OOP</li>
                        <li>Flask - Routing, templates, RESTful APIs</li>
                        <li>SQL - Basic queries, joins, CRUD operations</li>
                        <li>NoSQL: MongoDB (flexible schemas)</li>
                        <li>PostgreSQL - Database management, schema design</li>
                        <li>API Development - RESTful design, JSON handling, Standard endpoints (GET/POST/PUT/DELETE)</li>
                    </ul>
                </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default About