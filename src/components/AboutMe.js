import React from 'react';
import {Button, Container} from 'react-bootstrap';
import paint from '../assets/paint-stroke.png'
import brush from '../assets/brush.png'

function AboutMe() {

  // const styles ={
  //   aboutme:{
  //     backgroundColor: 'rgba(0,0, 0, 0.1)',
  //     padding: ' 1%',
  //   }
  // }
  return (
    <React.Fragment>
        <div  id="aboutme" >
        <p>A passionate web developer transitioning from a career in architecture.
        Currently, I am pursuing the opportunities to build functional, responsive, and innovative applications, and expand my skillset.</p>
        {/* I'm currently seeking opportunities to build functional and responsive applications, collaborate with other developers, and expand my skillset. */}
      </div>
      </React.Fragment>
  )
}

export default AboutMe

