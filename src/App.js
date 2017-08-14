import React, { Component } from 'react';
import logo from './logo.svg';
import Hero from './Hero.js';
import Exeperiences from './Experiences.js';
import Works from './Works.js';
import AboutMe from './AboutMe.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <AboutMe/>
        <Exeperiences></Exeperiences>
        <Works></Works>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
