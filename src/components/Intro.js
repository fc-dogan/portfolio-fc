import React, {useState} from 'react';
import AboutMe from './AboutMe';
import {Button, Container} from 'react-bootstrap';
import web from "../assets/web.jpg";
import wallpaper from "../assets/wallpaper.jpg";
import wallpaper1 from "../assets/wallpaper1.jpg";

function Intro() {
  
  const styles = { 
    container: {
      flex: '1',
      // backgroundImage: `url(${wallpaper1})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      padding: '18% 3%',
      height: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'lightgrey'
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
      <div style={styles.container}>
        {currentPage()}
        <Button variant="outline-info" onClick={handleClick} style={{margin:"30px",}} > {buttonText} </Button>
      </div>      
    </React.Fragment>
  )
}

export default Intro
