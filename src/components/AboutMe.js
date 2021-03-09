import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';


function AboutMe() {

  return (
    <React.Fragment>
      <Container fluid id="aboutMe">
        <Row>
          <Col sm={3}>
            <h2>About me</h2>
          </Col>
          <Col>
            <div style={{ width: '70%' , padding: '2rem 1rem', }} >
            <p> A passionate web developer transitioning from a career in architecture.
            Currently, I am pursuing the opportunities to build functional, and responsive applications, and expand my skillset.</p>
            <p> If you have any questions please <a href='mailto:fceyda@gmail.com' style={{color: 'grey', fontWeight: 'bolder'}}>contact me</a>.</p>
            </div>
          </Col>
        </Row>
       </Container>       
      </React.Fragment>
  )
}

export default AboutMe

