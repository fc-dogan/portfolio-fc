import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

function Education() {

  const educationData = [
    {
      schoolName: 'Epicodus',
      degree: 'Full-Stack Development',
      city: 'Portland, OR'
    },
    {
      schoolName: 'Erciyes University',
      degree: 'Bachelor’s Degree, Architecture',
      city: 'Kayseri, Turkey'
    }
  ]

  return (
    <Container id="education">
      <Row>
          <Col sm={3}>
           <h2>Education</h2>
          </Col>
          <Col>
              {educationData.map( (education , index )=> {
                return (
                  <Card key={index} style={{ margin:10}} border="light" >
                  <Card.Body>
                    <Card.Title>{education.schoolName} </Card.Title>
                    <Card.Subtitle>
                      {education.degree} -- <small>{education.city}</small>
                    </Card.Subtitle>
                  </Card.Body>
                  </Card>
                )
              })}
          </Col>
        </Row>
    </Container>
  )
}

export default Education
