import React, { Component } from 'react'
import styled from 'styled-components'

const AboutMeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        max-width: 400px;
        margin: 2em 1.5em;
        font-size: 1.5em;
    }
    @media (max-width: 360px) {
        margin: 1.5em 1.5em;
    }

`
class AboutMe extends Component {
    render () {
        return (
            <AboutMeWrapper>
                <div>
            "  Currently, a freelance web developer who lives in Thailand.
Interested in investment, reading, writhing, and exercise.   "
                </div>
            </AboutMeWrapper>
        )
    }
}

export default AboutMe