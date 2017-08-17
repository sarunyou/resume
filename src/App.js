import React, { Component } from 'react';
import Hero from './Hero.js';
import Exeperiences from './Experiences.js';
import Works from './Works.js';
import AboutMe from './AboutMe.js';
import Skills from './Skill.js';
import Project from './Project';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <AboutMe/>
        <Exeperiences></Exeperiences>
        <Skills></Skills>
        <Project></Project>
      </div>
    );
  }
}

export default App;
