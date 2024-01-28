import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Comment} from "./Comment";
import {Slider} from "../../../components/slider/Slider";
import astronaut from "../../../assets/images/astronaut.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle marginBottom={"5rem"}>Testimony</SectionTitle>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Image src={astronaut} alt=""/>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    )
};

const StyledTestimony = styled.section`
  margin-bottom: 50px;
`

const Image = styled.img`
  min-height: 300px;
  height: 100%;
`