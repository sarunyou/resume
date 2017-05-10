import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop : 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      window.addEventListener('scroll', this.handleScroll);
    }, 100);
  }

  handleScroll(e) {
    console.log('scrolling');
    const scrollTop = document.body.scrollTop
    this.setState({
      scrollTop
    });
  }
  
  render() {
    const transltePanda = {transform: "translateY(-" + this.state.scrollTop / 10 + "px)"};
    const transltePortfoliologo = {transform: "translateY(" + this.state.scrollTop / 2 + "px)"};
    return (
      <header>
        <div className="bg-blur">
          <div className="portfolio-logo" style={transltePortfoliologo}></div>
          <div className="panda-img" style={transltePanda}></div>
          <div className="rock-img"></div>
        </div>
      </header>
    );
  }
}

export default Header;
