import styled from 'styled-components';
import React, {Component} from 'react';
import reactIcon from './images/react-icon.png';

const LaptopWrapper = styled.div `
width: 100%;
height: 100vh;
box-sizing: border-box;
margin: 0;
${props => props.isOverflow
    ? 'overflow: hidden'
    : ""}
`
const Title = styled.div `
    position: relative;
    z-index: 2;
    font-size: 1.2rem;
    padding:20px 10px 0;
    color: white;
`

const Skill = styled.div `
margin: 10px 10px;
display: flex;
font-size: 1.25rem;
color: ${props => props.color
    ? 'black'
    : 'white'};
justify-content: space-between;
width: 200px;
height: 20px;
line-height: 20px;
`
const SVG = styled.svg `
    height: 100%;
    position: absolute;
`
const SVGElement = (props) => (
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <PATH
            color={props.color}
            id="Selection"
            fill="none"
            stroke="black"
            stroke-width="1"
            d="M 58.00,251.00
           C 58.00,251.00 58.00,210.00 58.00,210.00
             58.00,210.00 58.00,61.00 58.00,61.00
             58.00,61.00 58.00,10.00 58.00,10.00
             58.14,0.31 61.36,0.01 70.00,0.00
             70.00,0.00 264.00,0.00 264.00,0.00
             264.00,0.00 409.00,0.00 409.00,0.00
             409.00,0.00 441.00,0.00 441.00,0.00
             443.92,0.01 447.33,-0.29 449.77,1.60
             453.36,4.37 452.99,8.96 453.00,13.00
             453.00,13.00 453.00,201.00 453.00,201.00
             453.00,201.00 453.00,250.00 453.00,250.00
             453.00,257.77 454.42,266.29 450.00,273.00
             450.00,273.00 484.00,273.00 484.00,273.00
             489.27,273.00 498.30,272.50 503.00,274.26
             511.03,277.27 511.66,286.81 506.61,291.57
             503.65,294.36 499.76,293.99 496.00,294.00
             496.00,294.00 16.00,294.00 16.00,294.00
             13.20,294.00 9.60,294.21 7.10,292.83
             1.38,289.65 0.56,280.81 5.28,276.43
             8.98,272.97 15.25,273.01 20.00,273.00
             20.00,273.00 60.00,273.00 60.00,273.00
             56.88,266.26 58.00,258.28 58.00,251.00 Z
           M 74.00,16.00
           C 74.00,16.00 74.00,258.00 74.00,258.00
             74.00,258.00 437.00,258.00 437.00,258.00
             437.00,258.00 437.00,16.00 437.00,16.00
             437.00,16.00 74.00,16.00 74.00,16.00 Z
           M 234.00,285.00
           C 234.00,285.00 276.00,285.00 276.00,285.00
             277.94,285.00 281.86,285.23 283.38,283.98
             287.88,280.31 280.13,279.04 278.00,279.00
             278.00,279.00 247.00,279.00 247.00,279.00
             241.95,279.00 233.97,278.47 229.32,279.60
             224.45,283.84 230.53,284.93 234.00,285.00 Z"/>
    </SVG>
)

const PATH = styled.path `
    fill: ${props => props.color
    ? 'black'
    : 'white'};
    stroke: ${props => props.color
        ? 'black'
        : 'white'};
`
const SkillsWrapper = styled.div`
display: flex;
width: 80%;
height: 50%;
float: right;
flex-flow: row wrap;
align-items: flex-start;
justify-content: flex-end;
padding-top: 40px;
box-sizing: border-box;
`

const IconSkill = styled.div `
background: url(${props => props.img});
background-size: contain;
background-repeat: no-repeat;
width: 100px;
height: 100px;   
  
`

const ContentWrapper = styled.div `
background:${props => props.background
    ? props.background
    : 'linear-gradient(to bottom, lightskyblue, pink)'} ;  
top: 0;
margin: 0;
height: 100%;
width: 100%;
transform: translateY(calc(${props => props.top
        ? '-100% + ' + props.top + 'px'
        : '0%'}));
`

const Hr = styled.div `
    position: relative;
    z-index: 2;
    background: white;
    height: 3px;
    width: 80%;
    margin: 20px 20px 40px;
`

class Laptop extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    render() {
        return (
            <LaptopWrapper className="laptop-wrapper" isOverflow={this.props.top}>
                <ContentWrapper
                    className="content-laptop-wrapper"
                    top={this.props.top}
                    background={this.props.background}>
                    <Title>SKILLS</Title>
                    <Hr></Hr>
                    <SVGElement color={this.props.background}></SVGElement>
                    <SkillsWrapper>
                        {this
                            .props
                            .data
                            .map(d => <Skill color={this.props.background}>
                                <p>{d.title}</p>
                                <p>{('\u2605 ').repeat(d.level)}</p>
                            </Skill>)}
                        {this
                            .props
                            .icons
                                .map(icon => (<IconSkill img={icon.src}></IconSkill>))}
                    </SkillsWrapper>
                </ContentWrapper>
            </LaptopWrapper>
        );
    }
}

export default Laptop;