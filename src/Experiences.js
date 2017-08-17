import React, { Component } from "react";
import styled from "styled-components";
import * as Icon from "react-feather";
const ExeWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  > div {
      margin: 1em;
      width: 300px;
  }
`;

const Briefcase = styled(Icon.Briefcase)`
    margin-right: 0.5em;
`

const Title = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

class Experiences extends Component {
  render() {
    return (
      <ExeWrapper>
        <Title>
          <Briefcase />
            Experiences
        </Title>
        <div>
          <strong>THOMSON REUTERS, THAILAND</strong>
          <br />
          Internship<br /> [June 2016 - December 2016]
        </div>
        <br />
        <div>
          <strong>RUNNABLES CO., LTD. , THAILAND</strong>
          <br />
          Junior Developer<br /> [June 2017 - Currently ]
        </div>
      </ExeWrapper>
    );
  }
}

export default Experiences;
