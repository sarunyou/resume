import React, { Component } from 'react';
import styled from 'styled-components';

const SkillWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
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
                <div>Good</div>
                <div>Basic</div>
            </SkillWrapper>

        )
    }

}