import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Intro from './Intro'
import AboutmeModal from './AboutmeModal';
import Sidebar from './SideBar';
import Education from './Education';

function App() {
  return (
    <React.Fragment>
    <Sidebar />
      {/* <Header /> */}
    <div id='content'>
      <Intro />
      <Projects/>
      <Education />
    </div>
    </React.Fragment>
  );
}


export default App;
