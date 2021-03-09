import React from 'react';
import './App.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Intro from './Intro'
import Sidebar from './SideBar';
import Education from './Education';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
    <Sidebar />
      {/* <Header /> */}
    <div id='content'>
      <Intro />
      <Projects/>
      <AboutMe />
      <Education />
      <Footer />
    </div>
    </React.Fragment>
  );
}


export default App;
