import React, {Component} from 'react';
import './Header.css';
import Hero from './Hero.js';
import Laptop from './Laptop.js';
import Education from './Education.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      laptopWrapperEle1OffsetTop: 0
    };
    this.handleScroll = this
      .handleScroll
      .bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      window.addEventListener('scroll', this.handleScroll);
    }, 100);
  }


  handleScroll = () => {
    const laptopWrapperEle = document.getElementsByClassName('laptop-wrapper')[0];
    const laptopWrapperEle1 = document.getElementsByClassName('laptop-wrapper')[1];
    const contentLaptopWrapper = document.getElementsByClassName('content-laptop-wrapper')[0];
    const boundTopLaptopWrapperEle = laptopWrapperEle.getBoundingClientRect().top;
    const boundTopLaptopWrapperEle1 = laptopWrapperEle1.getBoundingClientRect().top;
    if (boundTopLaptopWrapperEle <= 0) {
      contentLaptopWrapper.style.position = "fixed";
    } else {
      contentLaptopWrapper.style.position = "static";
    }

    if (boundTopLaptopWrapperEle1 <= 0) {
      contentLaptopWrapper.style.position = "static";
    }
    
    if (boundTopLaptopWrapperEle1 <= global.window.innerHeight && boundTopLaptopWrapperEle1 >= 0) {
      console.log('ele1 = ' +laptopWrapperEle1.clientHeight);
      console.log('bounde1 = ' + boundTopLaptopWrapperEle1);
      const diff = global.window.innerHeight - boundTopLaptopWrapperEle1;
      console.log(`diff`);
      this.setState({laptopWrapperEle1OffsetTop: diff});
    }
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
        <Hero></Hero>
        <Laptop></Laptop>
        <Laptop top={this.state.laptopWrapperEle1OffsetTop} background="white"></Laptop>
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
