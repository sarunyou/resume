import React, { Component } from 'react';
import styled, {injectGlobal, keyframes} from 'styled-components';

injectGlobal`
    body {
        @import url('https://fonts.googleapis.com/css?family=Fresca');
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        font-family: 'Fresca', sans-serif;
    }
`
const randomBetweenZeroTo = max => Math.random() * max ;
const glitch = keyframes`
    0% {
        clip: rect(89vh , 9999px, 89.5vh, 0);
    }
    5% {
        clip: rect( 42vh, 9999px, 40vh, 0);
    }
    10% {
        clip: rect( 42vh, 9999px, 41vh, 0);
    }
    20% {
        clip: rect( 42vh, 9999px, 43vh, 0);
    }
    30% {
        clip: rect( 42vh, 9999px, 40vh, 0);
    }
    40% {
        clip: rect( 4vh, 9999px, 5vh, 0);
    }
    50% {
        clip: rect( 42vh, 9999px, 40vh, 0);
    }
    60% {
        clip: rect( 20vh, 9999px, 21vh, 0);
    }
    70% {
        clip: rect( 42vh, 9999px, 40vh, 0);
    }
    80% {
        clip: rect( 65vh, 9999px, 66vh, 0);
    }
    90% {
        clip: rect( 42vh, 9999px, 40vh, 0);
    }
    100% {
        clip: rect( 3vh, 9999px, 3.5vh, 0);
    }

`

const HeroWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    }
`
const ContentHero = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column wrap;
    font-size: 1.5em;
    font-weight: bold;
    > div {
        position: relative;
        margin: 2em 1em;
    }
    @media (max-width: 360px) {
        font-size: 1.25em;
    }
    @media (min-width: 415px) {
        align-items: center;
    }
`

const BgHero = styled.div`
    width: 50vw;
    height: 100vh;
    top: 0;
    margin: 5vh 10%;
    right: 0;
    z-index: -1;
    position: absolute;
    background: url(${require('./bg.jpg')}) no-repeat center top;
    &:after, &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url(${require('./bg.jpg')}) no-repeat center top;
    }

    &:after {
        filter: hue-rotate(45deg);
        left: 4px;
        animation: ${glitch} 2s infinite linear alternate-reverse;
        clip: rect(42vh , 9999px, 0vh, 0);
    }

    &:before {
        filter: hue-rotate(120deg);
        left: -4px;
        animation: ${glitch} 3s infinite linear alternate-reverse ;
        clip: rect(42vh , 9999px, 0vh, 0);
    }
    @media (max-width: 414px) {
        display: none;
    }
`
const BgMobile = styled.div`
    width: 80vw;
    position: absolute;
    height: 80vh;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -30%);
    z-index: -1;
    background: url(${require('./profile-grayscale.jpg')}) no-repeat center top -5em;
    @media (min-width: 415px) {
        display: none;
    }
`

const NameHero = styled.div`
    font-size: 2.5em;
`



class Hero extends Component {
    render() {
        return (
            <div>
                <HeroWrapper>
                    <ContentHero>
                        <div>
                            <NameHero>
                                <div>Sarunyou W.</div>
                            </NameHero>
                    a Freelance web developer <br/>
                    and a thinker.
                        </div>
                    </ContentHero>
                    <BgHero></BgHero>
                    <BgMobile></BgMobile>
                </HeroWrapper>
            </div>
        );
    }
}

export default Hero;