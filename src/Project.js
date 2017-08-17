import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
    font-size: 2em;
    > ul {
        list-style: none;
    }

`

class Project extends Component {
    render() {
        return (
            <ProjectWrapper>
                Project
                <ul>
                    <li>Paipun Mobile Application</li>
                    <li>Game made by Unity</li>
                    <li>Web Application File Management</li>
                    <li>Image Enhancement with Multi-Shot Images Aggregate Method</li>
                </ul>
            </ProjectWrapper>
        )
    }
}

export default Project;