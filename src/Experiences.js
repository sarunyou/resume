import React, { Component } from 'react';
import styled from 'styled-components';

const ExeWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 2em 2em;
    font-size: 1.5em;
`

const Title = styled.div`
    font-size: 2em;
    margin-bottom: 0.5em;
`

class Experiences extends Component {
    render () {
        return (
            <ExeWrapper>
                <Title>Experiences</Title>
                <div><strong>THOMSON REUTERS, THAILAND</strong><br/>
        Internship & Co-operative program <br/> [June - December 2016]</div>
            </ExeWrapper>
        )
    }
}

export default Experiences