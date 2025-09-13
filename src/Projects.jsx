import React from 'react'
import { Card,Button } from 'react-bootstrap'

const Projects = () => {
    const projects = [
        {
            title: 'SeenIT App',
            description: 'A full-stack application for showing users projects and CRUD operations.',
            github: 'https://github.com/oyeks-ayo/SeenITApp',
            demo:'#',
        },
        // Add more projects here as needed
        {
            title: 'Resturant App',
            description: 'A dynamic React.js app that showcases products, supports real-time search, and integrates seamlessly with APIs for up-to-date data.',
            github: 'https://github.com/oyeks-ayo/restaurant',
            demo: 'https://oyeks-ayo.github.io/restaurant/',
          },
        {
            title: 'HOG App',
            description: 'A Fullstack app for Hand of God, a tiles selling company that showcases their products, supports real-time search, and integrates seamlessly with paystack\'s APIs for payments.',
            github: 'https://github.com/oyeks-ayo/hogapp',
            demo: 'https://adamsonia62.pythonanywhere.com/',
          },
    ];
  return (
    <div>
        <Card className='mb-4'>
            <Card.Body>
                <Card.Title>Projects</Card.Title>
                {projects.map((project, index) => (
                    <Card key={index} className='mb-3'>
                        <Card.Body>
                            <Card.Title className='mb-2 text-muted'>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Button
                                href={project.github}
                                target="_blank"
                                className="me-2"
                                style={{ backgroundColor: '#172436', borderColor: '#172436' }}
                            >
                                GitHub
                            </Button>
                            <Button href={project.demo} target="_blank" variant="outline-dark">
                                Live Demo
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    </div>
  )
}

export default Projects