import React from 'react';
import styled, {keyframes} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Theme} from "../../../styles/Theme";
import Icon from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <StyledIcons>
                <Title><SectionTitle>Skills</SectionTitle></Title>
                <OuterCircle>
                    <MiddleCircle>
                        <StyledMoon>
                            <Icon iconId={"mode"} height={"70px"} width={"70px"}/>
                        </StyledMoon>
                        <InnerCircle>
                            <StyledGit>
                                <Icon iconId={"github"} height={"70px"} width={"70px"}/>
                            </StyledGit>
                            <StyledTg>
                                <Icon iconId={"telegram"} height={"70px"} width={"70px"}/>
                            </StyledTg>
                        </InnerCircle>
                    </MiddleCircle>
                </OuterCircle>
            </StyledIcons>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: ${Theme.colors.primary};
  min-height: 90vh;
  position: relative;
`

const Title = styled.div`
position: absolute;
`

const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

const OuterCircle = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border: 2px dotted ${Theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotateOuter 40s linear infinite;

  @keyframes rotateOuter {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const MiddleCircle = styled.div`
  width: 480px;
  height: 480px;
  border: 2px dotted ${Theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotateMiddle 50s linear infinite;

  @keyframes rotateMiddle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const InnerCircle = styled.div`
  width: 450px;
  height: 450px;
  border: 2px dotted ${Theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotateInner 60s linear infinite;

  @keyframes rotateInner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`

const StyledGit = styled.div`
  position: absolute;
  top: 10px;
  left: 60px;
`

const StyledTg = styled.div`
  position: absolute;
  bottom: -30px;
  left: 280px;
`

const StyledMoon = styled.div`
  position: absolute;
  bottom: -35px;
  left: 280px;
`

