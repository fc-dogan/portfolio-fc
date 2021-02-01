import React, {useState} from 'react';
import AboutMe from './AboutMe';
import {Button} from 'react-bootstrap';

function Intro() {
  return (
    <div>
     <h3>Hello</h3>
    </div>

  )
  // const [aboutmeVisibleOnPage, setAboutmeVisibleOnPage] = useState(false);
  // const buttonText = null;

  // const greeting = () => {
  //   return (
  //     <div>
  //     <h3>Hello</h3>
  //   </div>
  //   )
  // }

  // const handleClick = () => {
  //   setAboutmeVisibleOnPage(!aboutmeVisibleOnPage)
  //   console.log("toggle page " + aboutmeVisibleOnPage)
  // }

  // const currentPage = () => {
  //   if(aboutmeVisibleOnPage === false ){
  //     buttonText = "About me";
  //     return (
  //       <div>
  //        {greeting} 
  //       </div>
  //     ) 
  //   } else {
  //     buttonText = "go back";
  //     return  (
  //      <div>
  //        <AboutMe/> 
  //      </div>
  //     )
  //   }
   
  // }

  // return (
  //   <React.Fragment>
  //     <h3>Intro</h3>
  //     {currentPage()}
  //     <Button onClick={handleClick}> {buttonText} </Button>
  //   </React.Fragment>
  // )
}

export default Intro
