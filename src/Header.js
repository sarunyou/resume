import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.scrolled = 0;
  }
  render() {
    return (
      <header>
        <div className="bg-blur">
          <div className="portfolio-logo"></div>
          <div className="panda-img"></div>
          <div className="rock-img"></div>
          {/*<div className="profile-img"></div>*/}
        </div>
      </header>
    );
  }
}

export default Header;
