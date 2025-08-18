import React from 'react'
import {Card, Button} from 'react-bootstrap'


const Contact = () => {
  return (
    <Card className='mb-4'>
        <Card.Body>
            <Card.Title>Contact Me</Card.Title>
            <Card.Text>
                I'm always open to new opportunities and collaborations.
                Feel free to reach out if you have any questions or just want to connect!
            </Card.Text>
            <Button
                href='https://github.com/oyeks-ayo'
                target='_blank'
                className='mb-2 ms-2'
                style={{ backgroundColor: '#172436', borderColor: '#172436' }}
                variant='outline-dark'>
                    Github
            </Button>
            <Button
                href='https://linkedin.com/in/ayodele-oyekanmi-8b806919b/'
                target='_blank'
                className='mb-2 ms-2'
                style={{ backgroundColor: '#0077b5', borderColor: '#0077b5' }}
                variant='outline-dark'>
                    LinkedIn
            </Button>
            <Button
                href='mailto:oyekanmiayodele28@gmail.com'
                target='_blank'
                className='mb-2 ms-2'
                style={{ backgroundColor: '#1DA1F2', borderColor: '#1DA1F2' }}
                variant='outline-dark'>
                    Email
            </Button>
            <Button
                href='../public/AYODELE_D_OYEKANMI.pdf'
                target='_blank'
                className='mb-2 ms-2'
                style={{ backgroundColor: '#1DA1F2', borderColor: '#1DA1F2' }}
                variant='outline-dark'
                download>
                    Download My Resume
            </Button>
        </Card.Body>
    </Card>
  )
}

export default Contact