import React, {useState} from 'react';
import AboutMe from './AboutMe';
import {Button, Container} from 'react-bootstrap';
import web from "../assets/web.jpg";

function Intro() {


  // return (
  //   <div>
  //    <h3>Hello</h3>
  //   </div>

  // )
  const styles = { 
    container: {
      // backgroundImage: `url(${web})`,
      // backgroundSize: '100%', 
      backgroundPosition: 'bottom', 
      height: '500px',
      // textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
     }
  }
  const [aboutmeVisibleOnPage, setAboutmeVisibleOnPage] = useState(false);
  let buttonText = null;

  const greeting = () => {
    return (
      <div  >
      <h3>Hello!</h3>
      <h4>I'm Fatma Dogan, a software developer living in Portland, Oregon.  </h4>
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
       <div style={{padding:'5%'}}>
         <AboutMe/> 
       </div>
      )
    }
   
  }

  return (
    <React.Fragment>
      {/* <div clasName="content"> */}
        {/* <Container> */}
          {/* <h3>Intro</h3> */}
        <div style={styles.container}>
          {currentPage()}
          <Button variant="outline-info" onClick={handleClick}> {buttonText} </Button>
        </div>
        
      {/* </Container> */}
      {/* </div> */}
      
      
    </React.Fragment>
  )
}

export default Intro
