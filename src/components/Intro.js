import React, {useState} from 'react';
import AboutMe from './AboutMe';
import {Button, Container, Row} from 'react-bootstrap';
import web from "../assets/web.jpg";
import wallpaper from "../assets/wallpaper.jpg";
import wallpaper1 from "../assets/wallpaper1.jpg";

function Intro() {
  
  const styles = { 
    container: {
      backgroundImage: `url(${wallpaper1})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      padding: '18% 6%',
      height: 'auto',
      // flex: '1',
      // display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      // flexDirection: 'column',
      color: 'lightgrey'
     }
 
  }
  const [aboutmeVisibleOnPage, setAboutmeVisibleOnPage] = useState(false);
  let buttonText = null;

  const greeting = () => {
    return (
      <div  >
      <h3>Hello!</h3>
      <h5>I'm Fatma Dogan, a software developer living in Portland, Oregon.  </h5>
    </div>
    )
  }

  const handleClick = () => {
    setAboutmeVisibleOnPage(!aboutmeVisibleOnPage)
    console.log("toggle page " + aboutmeVisibleOnPage)
  }

  const currentPage = () => {
    if(aboutmeVisibleOnPage === false ){
      buttonText = "About me";
      return (
        <div>
         {greeting()} 
        </div>
      ) 
    } else {
      buttonText = "go back";
      return  (
       <div >
         <AboutMe/> 
       </div>
      )
    }
   
  }

  return (
    <React.Fragment>
      <div style={styles.container}>
        <Container fluid>
          {currentPage()}
          <Button variant="outline-secondary" size="sm" onClick={handleClick}  > {buttonText} </Button>
        </Container>
      </div>      
    </React.Fragment>
  )
}

export default Intro
