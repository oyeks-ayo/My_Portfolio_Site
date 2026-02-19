import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './assets/Projects.css'

const Projects = () => {
    const projects = [
        {
            title: 'SeenIT App',
            description: 'A professional portfolio and project showcase platform enabling creatives, artisans, and service professionals to display their work, build profiles, and connect with clients.',
            tags: ['Flask', 'PostgreSQL', 'React', 'Bootstrap'],
            github: 'https://github.com/oyeks-ayo/SeenITApp',
            demo: 'https://oyeksayo.pythonanywhere.com/',
        },
        {
            title: 'iFarm',
            description: 'A comprehensive e-commerce platform for farming products with user management, product catalog, shopping cart, checkout system, admin panel, and order history tracking.',
            tags: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'Alembic'],
            github: 'https://github.com/oyeks-ayo/ifarm',
            demo: 'https://ifarm.pythonanywhere.com/',
        },
        {
            title: 'Restaurant App',
            description: 'A dynamic React.js application showcasing restaurant products with real-time search functionality and seamless API integration for up-to-date data.',
            tags: ['React.js', 'JavaScript', 'API Integration', 'CSS'],
            github: 'https://github.com/oyeks-ayo/restaurant',
            demo: 'https://oyeks-ayo.github.io/restaurant/',
        },
        {
            title: 'HOG App',
            description: 'A full-stack e-commerce platform for a tiles company featuring product showcase, real-time search, and integrated Paystack payment processing.',
            tags: ['Full-Stack', 'Paystack API', 'React', 'Flask'],
            github: 'https://github.com/oyeks-ayo/hog',
            demo: 'https://adamsonia.pythonanywhere.com/',
        },
        {
            title: 'Notes App',
            description: 'A fullstack MERN application for creating and managing personal notes. Features API rate limiting with Upstash Redis, and a responsive UI built with React and Tailwind CSS. Deployed on render',
            tags: ['Full-Stack', 'Express', 'React', 'Node.js'],
            github: 'https://github.com/oyeks-ayo/MERN_STACK',
            demo: 'https://mern-stack-6sg9.onrender.com',
          },

          {
            title: 'Crypto News',
            description: 'A React application that displays real-time cryptocurrency data and market information with advanced search functionality, powered by the CoinGecko API and deployed on vercel.',
            tags: ['React App', 'Coingecko API', 'React'],
            github: 'https://github.com/oyeks-ayo/digital_assets',
            demo: 'https://digital-assets-dzu6n83cz-ayos-projects-5784c5aa.vercel.app',
          },
    ];

    return (
        <div className='projects-container'>
            <Card className='projects-header'>
                <Card.Body>
                    <Card.Title className='projects-title'>Featured Projects</Card.Title>
                    <Card.Text className='projects-subtitle'>
                        A collection of my recent work showcasing full-stack development expertise
                    </Card.Text>
                </Card.Body>
            </Card>

            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <Card key={index} className='project-card'>
                        <Card.Body className='project-body'>
                            <Card.Title className='project-title'>{project.title}</Card.Title>
                            <Card.Text className='project-description'>{project.description}</Card.Text>
                            
                            <div className='project-tags'>
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className='tag'>{tag}</span>
                                ))}
                            </div>

                            <div className='project-buttons'>
                                <Button
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='btn-project github-btn'
                                >
                                    <FaGithub /> Code
                                </Button>
                                <Button
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='btn-project demo-btn'
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Projects