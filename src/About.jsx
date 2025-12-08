import React from 'react'
import { Card } from 'react-bootstrap'

const About = () => {
  return (
    <Card className='mb-4'>
        <Card.Body>
            <Card.Title>About Me</Card.Title>
                <Card.Text>
                Hello, I'm Ayodele .D Oyekanmi, a Fullstack python web developer at SeenITApp; with skills in JS, Python, React.js, Flask, and Bootstrap.
                I specialize in building full-stack applications like product management systems and API-driven apps. 
                Passionate about creating user-friendly, responsive web solutions.
                </Card.Text>


                <Card.Title>
                Junior Database Engineer (Intern at m365Connect) July - November, 2025.
                </Card.Title>
                <Card.Text>
                I interned as a junior Database Engineer at m365connect where my team and I optimised the PostgreSQl database for 
                efficient querying, I single handedly fetched over a 100,000 candidates conecting to Manatal's Api at a request rate of 20 request/min,  using Flask Http Requests
                which was intended to be used to extend Manatal functiionalities with our own LLM.
                </Card.Text>

                <Card.Text>
                I also worked with Budibase, a no-code platform for managing databases and also developing user friendly applications 
                </Card.Text>

                <Card.Subtitle className='mb-2 text-muted'>
                    Skills:
                </Card.Subtitle>
                <Card.Text>
                    Frontend - 
                </Card.Text>
                
                    <ul>
                        <li>HTML5 - Semantic markup, accessibility, SEO basics</li>
                        <li>CSS3 - Flexbox/Grid,responsive design</li>
                        <li>JavaScript - ES6+ features, DOM manipulation, APIs</li>
                        <li>React.js - Components, state management, hooks</li>
                        <li>Bootstrap - Responsive design, pre-built components</li>
                        <li>Git/GitHub - Version control, collaboration</li>
                    </ul>
                
                <Card.Text>
                    Backend -
                </Card.Text>
                
                    <ul>
                        <li>Python - Core syntax, data structures, OOP</li>
                        <li>Flask - Routing, templates, RESTful APIs</li>
                        <li>SQL - Basic queries, joins, CRUD operations</li>
                        <li>NoSQL: MongoDB (flexible schemas)</li>
                        <li>PostgreSQL - Database management, schema design</li>
                        <li>API Development - RESTful design, JSON handling, Standard endpoints (GET/POST/PUT/DELETE)</li>
                    </ul>
                
        </Card.Body>
    </Card>
  )
}

export default About