import React from 'react';
import {Button, Container} from 'react-bootstrap';
import paint from '../assets/paint-stroke.png'
import brush from '../assets/brush.png'

function AboutMe() {

  return (
    <React.Fragment>
        <div style={{ width: '50%' , paddingBottom: '4rem'}} >
        <p> A passionate web developer transitioning from a career in architecture.
        Currently, I am pursuing the opportunities to build functional, and responsive applications, and expand my skillset.</p>
        <p> If you have any questions please <a href='mailto:fceyda@gmail.com' style={{color: 'lightgrey'}}>contact me</a>.</p>
      </div>
      </React.Fragment>
  )
}

export default AboutMe

