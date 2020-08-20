import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

function Projects() {
  return <p>projects</p>
}

export default App;
