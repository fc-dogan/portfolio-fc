import React  from 'react';
// import AboutMe from './AboutMe';
import { Container, Row, Accordion, Card} from 'react-bootstrap';
import wallpaper from '../assets/maarten-deckers-T5nXYXCf50I-unsplash.jpg';
import wallpaper1 from '../assets/wallpaper1.jpg';

function Intro() {
  
  const styles = { 
    container: {
      backgroundImage: `url(${wallpaper})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      padding: '18% 6%',
      height: 'auto',
      color: 'white',
      fontSize: '90%',
     }
  }
 
  return (
    <React.Fragment>
      <div style={styles.container}>
        <Container >
        <div id='greeting' >
          <h3>Hello!</h3>
          <h5>I'm <b>Fatma Dogan</b>, a software developer living in <b>Portland, Oregon</b>.  </h5>
        </div>        
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Intro
//  <Accordion >
//                 <Accordion.Toggle as={Button} variant="outline-light" size="sm" eventKey="0" >
                  
//                    About me 
//                 </Accordion.Toggle>
//                 <Accordion.Collapse eventKey="0">
                        
//                   <div style={{ padding: '3rem 1rem', backgroundColor:'rgb(0, 0, 0, .2)'}} >
//                     <div style={{ width: '70%' , paddingBottom: '4rem', }} >
//                       <p> A passionate web developer transitioning from a career in architecture.
//                       Currently, I am pursuing the opportunities to build functional, and responsive applications, and expand my skillset.</p>
//                       <p> If you have any questions please <a href='mailto:fceyda@gmail.com' style={{color: 'white', fontWeight: 'bolder'}}>contact me</a>.</p>
//                       {/* <FaAngleUp onClick={handleClick} size='30' style={{alignSelf: "inherit"}}/> */}
//                       </div>
//                   </div>     
//                 </Accordion.Collapse> 
//           </Accordion>