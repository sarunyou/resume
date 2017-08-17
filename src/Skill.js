import React, { Component } from 'react';
import styled from 'styled-components';

const SkillWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
`

const Card = styled.div`
    width: 360px;
    max-height: 400px;
    background: orange;
    border-radius: 10px;
    font-size: 2em;
    > div:first-child{
        border-bottom: 1px solid black;
        padding-left: 1em;
        line-height: 2em;
    }
    > ul {
        list-style: none;
    }
`
const Title = styled.div`
    font-size: 1.5em;
    text-transform: uppercase;
`
export default class Skill extends Component {
    render() {
        return (
            <SkillWrapper>
                <Title>Skills</Title>
                <Card>
                <div>Good</div>
                <ul>
                    <li>Javascript</li>
                    <li>Node</li>
                    <li>React & Redux</li>
                    <li>Express</li>
                </ul>
                </Card>
                <div>Want to learn more</div>
                <ul>
                    <li>Go language</li>
                    <li>Machine learning</li>
                </ul>
            </SkillWrapper>

        )
    }

}