import React, { Component } from 'react';
import logo from './logo.svg';
import Hero from './Hero.js';
import Exeperiences from './Experiences.js';
import Works from './Works.js';
import AboutMe from './AboutMe.js';
import Skills from './Skill.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <AboutMe/>
        <Exeperiences></Exeperiences>
        <Skills></Skills>
        <Works></Works>
      </div>
    );
  }
}

export default App;
