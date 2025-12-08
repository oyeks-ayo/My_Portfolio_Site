import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './assets/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <Card className='contact-card'>
        <Card.Body>
          <Card.Title className='contact-title'>Let's Connect</Card.Title>
          <Card.Text className='contact-intro'>
            I'm always open to new opportunities and collaborations.
            Feel free to reach out if you have any questions or just want to connect!
          </Card.Text>

          <div className='contact-info'>
            <div className='info-item'>
              <strong>Phone:</strong>
              <a href='tel:08162276261'>08162276261</a>
            </div>
            <div className='info-item'>
              <strong>Email:</strong>
              <a href='mailto:oyekanmiayodele28@gmail.com'>oyekanmiayodele28@gmail.com</a>
            </div>
          </div>

          <Card.Text className='contact-social-title'>Follow me on</Card.Text>
          <div className='contact-buttons'>
            <Button
              href='https://github.com/oyeks-ayo'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-social github-btn'
              title='GitHub Profile'
            >
              <FaGithub /> GitHub
            </Button>
            <Button
              href='https://linkedin.com/in/ayodele-oyekanmi-8b806919b/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-social linkedin-btn'
              title='LinkedIn Profile'
            >
              <FaLinkedin /> LinkedIn
            </Button>
            <Button
              href='mailto:oyekanmiayodele28@gmail.com'
              className='btn-social email-btn'
              title='Send Email'
            >
              <FaEnvelope /> Email
            </Button>
            <Button
              href='/AYODELE_D_OYEKANMI.pdf'
              download
              className='btn-social resume-btn'
              title='Download Resume'
            >
              <FaFileDownload /> Resume
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cta-card'>
        <Card.Body className='cta-body'>
          <Card.Title className='cta-title'>Ready to work together?</Card.Title>
          <Card.Text>
            I'm excited to collaborate on innovative projects. Drop me a message and let's create something amazing!
          </Card.Text>
          <Button href='mailto:oyekanmiayodele28@gmail.com' className='btn-cta'>
            Start a Conversation
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Contact