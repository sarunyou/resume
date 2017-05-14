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
    return (
      <header>
        <div className="nav-profile-img-wrapper flex flex-center">
          <div className="profile-img" />
          <ul className="nav">
            <li>About me</li>
            <li>Education & Skills</li>
            <li>Experiences</li>
            <li>Contact</li>
          </ul>
        </div>
        <section className="flex flex-space-around"> 
          <div className="col-2 align-top">
            <div className="text-center">
              <span>SKILLS</span>
            </div>
            <hr/>
            <ul className="none-list-style">
              <li>Javascript
                <div className="right">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                </div>
              </li>
              <li>PHP
                <div className="right">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-white"></div>
                  <div className="star-icon-white"></div>
                </div>
              </li>
              <li>Python
                <div className="right">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-white"></div>
                </div>
              </li>
              <li>Java
                <div className="right">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-white"></div>
                  <div className="star-icon-white"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <div className="text-center">
              <span>Experiences</span>
            </div>
            <hr/>
            <div className="content">
              <strong>THOMSON REUTERS, THAILAND </strong>
              <div className="font-italic">Internship & Co-operative program</div>
              <ul>
                <li>Worked as Front-end developer</li>
                <li>Developed web application files management</li>
                <li>Increasing productivity of team 20%</li>
              </ul>
              <strong>ACTIVE CITYZEN GEEK SO GOOD </strong>
              <ul>
                <li>14 Finalist team</li>
                <li>Developed mobile application named PAIPUN</li>
              </ul>
              <strong>Attended ACM-ICPC Thailand 2016</strong>
              <strong>Attended National Software Contest Thailand 2016</strong>
            </div>
          </div>
        </section>
        <section className="flex flex-center">
          <div className="col-1">
            <div className="text-center">
              <span>Education</span>
            </div>
            <hr/>
            <div className="content">
              <strong>Computer Engineering Kasetsart University, Thailand</strong>     
              Bachelor degree 2013 - Present
            </div>
          </div>
        </section>
        <section className="footer flex flex-space-around">
          <div className="title"><strong>Contact</strong></div>
          <ul>
            <li><i className="fa fa-github" aria-hidden="true" /><a href="http://www.github.com/sarunyou">github.com/sarunyou/</a></li>
            <li><i className="fa fa-facebook-square" aria-hidden="true" /><a href="mailto:sarunyou.w@ku.th">sarunyou.w@ku.th</a></li>
            <li><i className="fa fa-envelope-open-o" aria-hidden="true"></i><a href="http://www.facebook.com/sarunyou.whang">facebook.com/sarunyou.whang</a></li>
            <li><i className="fa fa-phone" aria-hidden="true"></i><a>089-415-4308</a></li>
          </ul>
        </section>

      </header>
    );
  }
}

export default Header;
