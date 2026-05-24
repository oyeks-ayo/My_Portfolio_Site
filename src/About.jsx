import React from "react";
import { Card } from "react-bootstrap";
import "./assets/About.css";

const About = () => {
  return (
    <div>
      <Card className="about-card">
        <Card.Body>
          <Card.Title className="about-title">About Me</Card.Title>
          <Card.Text className="about-intro">
            Hello, I'm <strong>Ayodele .D Oyekanmi</strong>, a Fullstack Web
            developer at Leinard Studios with expertise in JavaScript,
            Typescript, Express.js, Hono.js, Python, React.js, Flask, Bootstrap
            and Tailwind. I specialize in building full-stack applications like
            product management systems and API-driven apps.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="experience-card">
        <Card.Body>
          <Card.Title className="experience-title">
            Full Stack Web Developer
          </Card.Title>
          <Card.Subtitle className="experience-subtitle">
            Leinard Studios • April 2026 to date
          </Card.Subtitle>
          <Card.Text className="experience-content">
            <ul className="experience-list">
              <li>
                Built a scalable logistics REST API using Hono.js deployed on
                Cloudflare Workers
              </li>
              <li>
                Implemented end-to-end request validation using Zod schemas,
                replacing manual type casting across all API endpoints
              </li>
              <li>
                Integrated Prisma ORM with PostgreSQL for type-safe database
                operations across shipment, parcel, and user management
              </li>
              <li>
                Designed a multi-environment configuration system using Node.js
                env files for development and production
              </li>
              <li>
                Implemented role-based access control with Basic Auth and
                session-based admin/user authentication
              </li>
              <li>
                Integrated third-party shipping carrier APIs for real-time rate
                generation and label purchasing
              </li>
              <li>
                Built a transactional email system using React Email with
                dynamic templating
              </li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title className="experience-title">
            Full Stack Web Developer
          </Card.Title>
          <Card.Subtitle className="experience-subtitle">
            SeenIT (Freelance) • Nov 2025 - May 2026
          </Card.Subtitle>
          <Card.Text className="experience-content">
            <ul className="experience-list">
              <li>
                Built a professional networking platform (SeenITApp) with
                portfolio showcasing, skill/service selection, and profile photo
                uploads using Python, Flask, and MySQL
              </li>
              <li>
                Designed and managed many-to-many database relationships between
                profiles, skills, and services using junction tables with
                SQLAlchemy ORM
              </li>
              <li>
                Implemented secure file upload system with unique filename
                generation, image format validation, and safe file storage
              </li>
              <li>
                Built an agricultural management system (iFarm) for tracking
                farms, crops, and harvests with full database architecture
                design
              </li>
              <li>
                Managed database schema migrations using Flask-Migrate, enabling
                production schema changes without data loss
              </li>
              <li>
                Deployed production applications on PythonAnywhere, handling
                WSGI configuration and production debugging
              </li>
              <li>
                Built dynamic frontend templates using Jinja2 and Bootstrap with
                AJAX form submissions and CSRF protection
              </li>
              <li>
                Debugged and resolved complex issues including CSRF token
                errors, file path bugs, and database relationship data loss
              </li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title className="experience-title">
            Junior Database Engineer
          </Card.Title>
          <Card.Subtitle className="experience-subtitle">
            m365Connect (Internship) • July - November 2025
          </Card.Subtitle>
          <Card.Text className="experience-content">
            <ul className="experience-list">
              <li>Optimized PostgreSQL database for efficient querying</li>
              <li>
                Fetched and processed 100,000+ candidates via Manatal's API at
                20 requests/min using Flask HTTP Requests
              </li>
              <li>
                Extended Manatal functionalities with custom LLM integration
              </li>
              <li>
                Developed user-friendly applications using Budibase (no-code
                platform)
              </li>
            </ul>
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title className="experience-title">
            Junior Database Engineer
          </Card.Title>
          <Card.Subtitle className="experience-subtitle">
            m365Connect (Internship) • July - November 2025
          </Card.Subtitle>
          <Card.Text className="experience-content">
            <ul className="experience-list">
              <li>Optimized PostgreSQL database for efficient querying</li>
              <li>
                Fetched and processed 100,000+ candidates via Manatal's API at
                20 requests/min using Flask HTTP Requests
              </li>
              <li>
                Extended Manatal functionalities with custom LLM integration
              </li>
              <li>
                Developed user-friendly applications using Budibase (no-code
                platform)
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="skills-card">
        <Card.Body>
          <Card.Title className="skills-title">Technical Skills</Card.Title>

          <div className="skill-section">
            <Card.Subtitle className="skill-category">
              Frontend Development
            </Card.Subtitle>
            <ul className="skills-list">
              <li>
                <span className="skill-badge">HTML5</span> Semantic markup,
                accessibility, SEO
              </li>
              <li>
                <span className="skill-badge">CSS3</span> Flexbox, Grid,
                responsive design
              </li>
              <li>
                <span className="skill-badge">JavaScript</span> ES6+, DOM
                manipulation, APIs
              </li>
              <li>
                <span className="skill-badge">React.js</span> Components, hooks,
                state management
              </li>
              <li>
                <span className="skill-badge">Bootstrap</span> Responsive
                design, components
              </li>
              <li>
                <span className="skill-badge">Tailwind CSS</span> Utility-first
                styling, responsive design
              </li>
              <li>
                <span className="skill-badge">Git/GitHub</span> Version control,
                collaboration
              </li>
            </ul>
          </div>

          <div className="skill-section">
            <Card.Subtitle className="skill-category">
              Backend Development
            </Card.Subtitle>
            <ul className="skills-list">
              <li>
                <span className="skill-badge">Python</span> Core syntax, OOP,
                data structures
              </li>
              <li>
                <span className="skill-badge">Flask</span> Routing, templates,
                RESTful APIs
              </li>
              <li>
                <span className="skill-badge">Hono.js</span> REST APIs,
                middleware, Cloudflare Workers deployment
              </li>
              <li>
                <span className="skill-badge">Express.js</span> Building RESTful
                APIs, middleware implementation, route handling
              </li>
              <li>
                <span className="skill-badge">Node.js</span> Backend
                development, event-driven architecture, package management
              </li>
              <li>
                <span className="skill-badge">TypeScript</span> Type safety, Zod
                validation, schema-driven development
              </li>
              <li>
                <span className="skill-badge">Prisma</span> Type-safe ORM,
                schema migrations, database management
              </li>
              <li>
                <span className="skill-badge">Zod</span> Runtime validation,
                schema inference, request body validation
              </li>
              <li>
                <span className="skill-badge">SQL</span> Queries, joins, CRUD
                operations
              </li>
              <li>
                <span className="skill-badge">PostgreSQL</span> Database design,
                schema management
              </li>
              <li>
                <span className="skill-badge">MongoDB</span> NoSQL, flexible
                schemas
              </li>
              <li>
                <span className="skill-badge">API Dev</span> RESTful design,
                JSON, HTTP methods, authentication
              </li>
              <li>
                <span className="skill-badge">React Email</span> Transactional
                email templates, dynamic content
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
