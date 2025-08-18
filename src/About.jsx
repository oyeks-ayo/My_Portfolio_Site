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
                    <ul>
                        <li>Frontend: React.js, JavaScript, HTML, CSS, Bootstrap</li>
                        <li>Backend: Flask, Python</li>
                        <li>Tools: Git, GitHub</li>
                    </ul>
        </Card.Body>
    </Card>
  )
}

export default About