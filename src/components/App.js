import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Intro from './Intro'
import AboutmeModal from './AboutmeModal';

function App() {
  return (
    <Router>
      <Header />
      <Intro />
      <AboutmeModal />
      <Projects/>
      {/* <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch> */}
    </Router>
  );
}


export default App;
