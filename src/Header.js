import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0
    };
    this.handleScroll = this
      .handleScroll
      .bind(this);
    this.scrollBottom = this
      .scrollBottom
      .bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      window.addEventListener('scroll', this.handleScroll);
    }, 100);
  }

  scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  handleScroll(e) {
    const scrollTop = document.body.scrollTop
    this.setState({scrollTop});
  }

  render() {
    const starIcons = document.getElementsByClassName("star-icon");
    if (starIcons.length) {
      let index = 0,
      length = starIcons.length;
      const starIcon = starIcons[index];
      if (starIcon.getBoundingClientRect().top < window.innerHeight*8/10) {
        for (let index = 0; index < length; index++) {
            setTimeout(function(){
              starIcons[index].classList.add('isShow')}
              , 200*index);
        }
      } else if (starIcon.getBoundingClientRect().top > window.innerHeight) {
        for (let index = 0; index < length; index++) {
          starIcons[index].classList.remove('isShow');
        }
      }
    }

    return (
      <header>
        <div className="nav-profile-img-wrapper flex flex-space-around">
          <div className="profile-img"/>
          <ul className="nav">
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li >
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li >
              <a href="#education">Education</a>
            </li>
            <li onClick={this.scrollBottom}>Contact</li>
          </ul>
        </div>
        <section id="about-me" className="flex flex-center">
          <div className="col-1">
            <div className="text-center">
              <span>About me</span>
            </div>
            <hr/>
            <div className="content">
              Hi, I'm Sarunyou Whangbunyapirat, a junior web developer, a thinker and a guy
              who trying to be a great developer, not a just good developer. My job is to
              build a website which is not just attractive but also has functionality. I think
              UX is the most important thing in building the website.
            </div>
          </div>
        </section>
        <section id="skills" className="flex flex-space-around">
          <div className="col-2 align-top">
            <div className="text-center">
              <span>SKILLS</span>
            </div>
            <hr/>
            <ul className="none-list-style">
              <li>Javascript
                <div className="right star-icon">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                </div>
              </li>
              <li>PHP
                <div className="right star-icon">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-white"></div>
                  <div className="star-icon-white"></div>
                </div>
              </li>
              <li>Python
                <div className="right star-icon">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-white"></div>
                </div>
              </li>
              <li>Java
                <div className="right star-icon">
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-yellow"></div>
                  <div className="star-icon-white"></div>
                  <div className="star-icon-white"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2" id="experiences">
            <div className="text-center">
              <span>Experiences</span>
            </div>
            <hr/>
            <div className="content">
              <strong>THOMSON REUTERS, THAILAND
              </strong>
              <div className="font-italic">Internship & Co-operative program</div>
              <ul>
                <li>Worked as Front-end developer</li>
                <li>Developed web application files management</li>
                <li>Increasing productivity of team 20%</li>
              </ul>
              <strong>ACTIVE CITYZEN GEEK SO GOOD
              </strong>
              <ul>
                <li>14 Finalist team</li>
                <li>Developed mobile application named PAIPUN</li>
              </ul>
              <strong>Attended ACM-ICPC Thailand 2016</strong>
              <strong>Attended National Software Contest Thailand 2016</strong>
            </div>
          </div>
        </section>
        <section id="education" className="flex flex-center">
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
        <section id="contact" className="footer flex flex-space-around">
          <div className="title">
            <strong>Contact</strong>
          </div>
          <ul>
            <li><i className="fa fa-github" aria-hidden="true"/>
              <a href="http://www.github.com/sarunyou">github.com/sarunyou/</a>
            </li>
            <li><i className="fa fa-facebook-square" aria-hidden="true"/>
              <a href="mailto:sarunyou.w@ku.th">sarunyou.w@ku.th</a>
            </li>
            <li>
              <i className="fa fa-envelope-open-o" aria-hidden="true"></i>
              <a href="http://www.facebook.com/sarunyou.whang">facebook.com/sarunyou.whang</a>
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i>
              <a>089-415-4308</a>
            </li>
          </ul>
        </section>

      </header>
    );
  }
}

export default Header;
