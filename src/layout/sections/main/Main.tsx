import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import Icon from "../../../components/icon/Icon";
import {Button} from "../../../components/Button";
import astronaut from "../../../assets/images/astronaut.png"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <Icon iconId={"sky1"} width={"559"} height={"738"} viewBox={"0 0 559 738"}/>
                <FlexWrapper direction={"column"} justify={"center"} align={"center"} wrap={"nowrap"}>
                    <Greeting>HI, I'M</Greeting>
                    <Name>TETIANA TKACHUK</Name>
                    <Title>a Web Developer</Title>
                    <Button>Contact</Button>
                    <Icon iconId={"scroll"} width={"50"} height={"100"} viewBox={"0 0 50 100"}/>
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
`

const Greeting = styled.span`
  font-family: "Sugarpunch", sans-serif;
  font-size: 2rem;
`

const Name = styled.h2`
  font-family: "Organic Relief", sans-serif;
  font-size: 4rem;
  line-height: 8rem;
  margin-bottom: 15px;
`
const Title = styled.h1`
  margin-bottom: 25px;
`

// const Astronaut = styled.img`
//   position: absolute;
//   top: 170px;
//   right: 210px
// `