import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Intro from './Intro'
import AboutmeModal from './AboutmeModal';
import Sidebar from './SideBar';

function App() {
  return (
    <Router>
    <Sidebar />
      {/* <Header /> */}
    <div id='content'>
      <Intro />
      {/* <AboutmeModal /> */}
      <Projects/>
      {/* <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch> */}
    </div>
    </Router>
  );
}


export default App;
