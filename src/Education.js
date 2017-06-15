import React, {Component} from 'react';
import styled from 'styled-components';

const EducationWrapper = styled.div `
    width: 100%;
    height: 200px;
    // background: pink;
    overflow: hidden;
    position: relative;
`

const Title = styled.div `
    position: relative;
    z-index: 2;
    font-size: 1.2rem;
    margin: 20px 20px;
    color: white;
`

const Background = styled.div `
    height: 100%;
    width: 100%;
    background: linear-gradient(to bottom, lightskyblue, pink);
    position: absolute;
    z-index: 1;
`

const Text = styled.div `
    font-size: 1rem;
    color: white;
    max-width: 80%;
    position: relative;
    z-index: 2;
    margin: 20px 50px;
`

const Hr = styled.div`
    position: relative;
    z-index: 2;
    background: white;
    height: 3px;
    width: 80%;
    margin: 20px 20px
`

export default class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EducationWrapper>
                <Background></Background>
                <Title>EDUCATION</Title>
                <Hr></Hr>
                <Text>Bachelor of Computer Engineering, Kasetsart University, Thailand - (2013 - 2017)</Text>
            </EducationWrapper>
        )
    }

}