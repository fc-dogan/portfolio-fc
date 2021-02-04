import React from 'react';
import childtrack from '../assets/chilTrack.png';
import pierres from '../assets/pierres.png';
import airport from '../assets/PDXAirportGuide.png';
import taproom from '../assets/taproom.png';
import hangman from '../assets/hangman.png';
import { Card, CardDeck, Row, Col, Container } from 'react-bootstrap';

const projectsData = [
  {
    name: 'ChilTrack',
    description: 'An application for parents who can track their kids’ behavior, daily progress, and set a goal(reward) to motivate them',
    image: childtrack,
    sourceUrl: 'https://github.com/fc-dogan/ChilTrack',
    liveSite: 'https://childtrack-b1767.web.app/',
  },
  {
    name: "Pierre's Sweet and Savory Treats",
    description: 'An ASP.NET MVC application with user authentication and many-to-many database relationship.',
    image: pierres,
    sourceUrl: 'https://github.com/fc-dogan/Pierre-s-Treats',
    liveSite: '',
  },
  {
    name: 'Animal Shelter API',
    description: 'A REST API with ASP.NET for a local animal shelter',
    image: '',
    sourceUrl: 'https://github.com/fc-dogan/AnimalShelterAPI',
    liveSite: '',
  },
  {
    name: 'Taproom',
    description: `An application built in React Redux to track a taproom's taps by name, brand, price, flavor, and quantity.`,
    image: taproom,
    sourceUrl: 'https://github.com/fc-dogan/Taproom-Redux',
    liveSite: '',
  },
  {
    name: 'Hangman',
    description: `Hangman game built using React, Redux, Node.js, Bootstrap `,
    image: hangman,
    sourceUrl: 'https://github.com/fc-dogan/hangman',
    liveSite: 'https://fc-dogan.github.io/hangman/',
  },
  {
    name: 'Pdx Airport Guide',
    description: 'Website application for travelers where they can find airport amenities and flight information.',
    image: airport,
    sourceUrl: 'https://github.com/fc-dogan/pdx-airport-guide',
    liveSite: '',
  },
]

function Projects() {
  
  const styles = {
    card: {
      borderRadius: 7,
      margin: 10,
      height: '95%',
    },
    cardImage: {
      borderRadius: 5,
      padding: '5px',
      width: '12rem',
      alignSelf: 'center',    
    },
  }
   
  return (
    <React.Fragment>
      <Container id="projects">
        <Row>
          <Col sm={3}>
           <h2>Projects</h2>
          </Col>
          <Col>
            <CardDeck>
              {projectsData.map( (project , index )=> {
                return (
                  <Col key={index} >
                  <Card style={styles.card}>
                  <Card.Img variant="top" src={project.image} style={styles.cardImage}/>
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>
                      {project.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Card.Link href={project.liveSite}>Source</Card.Link>
                    <Card.Link href={project.liveSite}>{project.liveSite ? 'View Live' : ''}</Card.Link>
                  </Card.Footer>
                  </Card>
                  </Col>
                )
              })}
            </CardDeck>
          </Col>
        </Row>
      </Container>
      
      
    </React.Fragment>
  )
}

export default Projects
