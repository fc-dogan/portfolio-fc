import React from 'react';
import { Link } from "react-router-dom";

function Header () {
  return (
    <React.Fragment>
      <h1>FCD</h1>
      <nav>
        <ul>
        <li>
        <Link to="/aboutme">About me</Link>
        </li>
        <li>
         
         <Link to="/projects">Projects</Link>
        </li>
        <li>
         Education
        </li>
        <li>
         <a href="">LinkedIn</a>
        </li>
        <li>
         <a href="">GitHub</a>
        </li>
      </ul>
      </nav>
      
    </React.Fragment>
  );
}

export default Header;