import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import Icon from "../../../components/icon/Icon";
import {Button} from "../../../components/Button";
import astronaut from "../../../assets/images/astronaut.png"
import {Socials} from "../../../components/socials/Socials";
import {font} from "../../../styles/Common";
import {Theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <Icon iconId={"sky1"} width={"559"} height={"738"} viewBox={"0 0 559 738"}/>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"} wrap={"nowrap"}>
                    <Greeting>HI, I'M</Greeting>
                    <Name>TETIANA TKACHUK</Name>
                    <Title>a Web Developer</Title>
                    <Button marginBottom={"2rem"}>Contact</Button>
                    <Socials/>
                    <ScrollButton><Icon iconId={"scroll"} width={"50"} height={"100"} viewBox={"0 0 50 100"}/></ScrollButton>
                </FlexWrapper>
                <Icon iconId={"sky2"} width={"509"} height={"576"} viewBox={"0 0 509 576"}/>
                {/*<div style={{position: "relative"}}>*/}
                {/*    */}
                {/*    <Astronaut src={astronaut}/>*/}
                {/*</div>*/}

            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  min-height: 90vh;
  text-align: center;
  
  ${Button} {
    @media ${Theme.media.mobile} {
      margin-bottom: 1.2rem;
    }
  }
`

const Greeting = styled.span`
  ${font({family: '"Sugarpunch", sans-serif', Fmax: 42, Fmin: 24})};
  margin-top: 30px;
`

const Name = styled.h2`
  ${font({family: '"Organic Relief", sans-serif', lineHeight: '8rem', Fmax: 70, Fmin: 46})}
  margin-bottom: 15px;
  
  @media ${Theme.media.mobile} {
    margin-bottom: 10px;
    line-height: 6rem;
  }
`
const Title = styled.h1`
  ${font({weight: 700, Fmax: 40, Fmin: 24})}
  margin-bottom: 25px;

  @media ${Theme.media.mobile} {
    margin-bottom: 15px;
  }
`

const ScrollButton = styled.button`
  margin-top: 2rem;
`

// const Astronaut = styled.img`
//   position: absolute;
//   top: 170px;
//   right: 210px
// `